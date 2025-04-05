/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "UcuACM87cerFGHQMzj2mdP7nkkyMCDbUE7L3GF75fhKTaLZbUnZWxuSkp7DnNGGze75eieViF9xjAN3J9Z8zS6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ltfh57EHhDa4yNQN8eMjLnHWrNBthwtP54eFQcS45VSmwPdAyRXMiFnEzPACYev2kYQmquXe3vBfdKkZty47JYY",
  "key1": "3AqABXnqaBnLUML2XyrymuazjWou1TYfvmSH56FmSbycVQEc4bbG2ebmbc4A1Eqf1mhkT3BVnfVGwPKhbaatycNv",
  "key2": "2WukvTYstKquprsFM5JAX91c6yxDaZqUB9VuJyFbzkaJWHJbdkDfrKE61xMowHcFa2jcdHyT599oi3N2Kx7yExi5",
  "key3": "4yKiN2eM62WFZhkWZJAVzXtosqc4bbbpaB9G1hb3Be1NZz8R4XrYBn5MwqcTfB2anFjZM46Ao5roWtW8LYrRow6u",
  "key4": "W6LSbfituSLt1JnnQaXvYdQ3M6WGztXTUAgLWND4TDoFqaN76fnkrj52X8CW4QecnWjXWmraohkXjJTqnXJnLpM",
  "key5": "46pjqMLdSeJhV3kr2TF61HhtxnnkQS5TvkKhtJm2RdC8yy689yn2dE3CzW7499hJT6a3yxmBKCGaoWUPARbwsjtV",
  "key6": "2VkspWq6Qz2Gh4Uw9HVtrmZUepTEjhZNHzGinR26u9hNSN2Bypzd58BkBVEt8Z3uRNuNKVpFZ53UhsCLXB946iLK",
  "key7": "2neJdQQ3SuZ7tNC1Vk3bPxVs1kY7J5kf9YjiMEguBRgXbpyQGGXcTnnK7ygVQRNVzRkqoUnfCh6fu2TAnrog9Dxk",
  "key8": "3cnkZi853cNZpbzWCDAHHhHWF9xbT9sUQ9HvkfTVbhdpz1nTdksmN8AqHvTJFSS4ESw2Z4fgyvewn14TnxVQVdLP",
  "key9": "4z8BdRXvRqJJyNZu9to71Soi1VpNDZsxcnpzPv5S2vYqaSp5LA9ZmsufksHpH5UrBfv8cmVvLfvMeoBBLZPG481x",
  "key10": "3YRHXQHcFHHt3GkBzseipaT5GGUvUUWF9Q1iNpP9UHBzZBPJZszpwm4HLdQ7BzxJogA9ATjLfvUvHVwSFuYZhtMo",
  "key11": "3z81uYW1GB29naBkoxTN6PhKWrvBaYp11TZsXczQSv5CtVpeWqZvLqvTbqY1qw4cXmuo8rkGfpCKSosEzQkP99N3",
  "key12": "2rT8NBk7cJhquGP3yGQtrQ3rSK16KBwxXTySURDeUKQLBbHiGVu7tD4g3z2uD2mZxDD6Azz6cvMyuCgzGne3jMbZ",
  "key13": "3V8th22daT6qupdxMpB4acGYDbP2oCPCJN1hVHTLBPkLcsmn4gvVTbhKJDivAp478eQErfgTTYuRPQSHhWR4qQCb",
  "key14": "4ESD9nwtzAvLbmqWdpfBU7wsoBuC4LGp3LsJ2pqVpAVzcEqqZgMZQc8AZmtdZYoNKG8GMfZJ2wSdTW7xrvgHzs37",
  "key15": "2NT43EH1VTgvic5i1UJSiDNRCCxcQRacr2zPHDsMzu2pZ4hGfTCazL6ELBSHCniA4LGpx8MhxBYSYCW6KSAwbBNZ",
  "key16": "3XmBFgiQ6EfFgfDJVq8rBWrouLmdBZzGoJEnnbF2McsyzV8PfC6erE5em8rzpbPRpkRYGAKH5y75gr8nPx2aAcRw",
  "key17": "rHJx6KiPQebFHDntxdUd3WVu3MutSKz1N3sZkmX4uhtubGCa2hQwSMAX6xiuBvphomUL5k8fZTsWVTxx19aowNM",
  "key18": "4KatjP54PfT913qjR1xXWBm3qF4RSXkj7Swy14kmV7SAJoo8CScd1NLdErBr1JgPx2M5woFdnRagNzYmAFdo2TiL",
  "key19": "33Asqg1cpPfJUA8uwcpyoRD8HBxHECuuKoeM8bo1XJx7EsRJiMeEwTvzSp4iH3gert5n5qRLvMS2uCHFoS5PZiAB",
  "key20": "3UsjqzMntx2EFZeRuFoi58oP132VKqQ1v6621u6weuHre5kgVQnppPg1eSYjPH5zawHW4vXjRYgW1RMW58EHGCYw",
  "key21": "2HnBEbSVQvVuEjAkkvzJTUTBjMowfPhNr7AnwmvzscWw9w1o6zQzc2dSk9tFDZy6cyjrzJ7qjNSXP6qdUBjGEKhj",
  "key22": "4V5YZBApLjLtHjmv5B1Z7PpRhjfv74wKCeGgLULSgoQvPXc5Fm11vmDFK6uiSSCQVFEG2npCaQ3vY9iw62txTQbA",
  "key23": "672hnKUr7iT7fn3s1SzzzksG6aWmHfD9yNvkXUeZPet9prB4q3f5NouEcU8n9mKVTNaBqsc1vfzuAXmWRRQX7JpG",
  "key24": "4hKJDnrcSGX5nL4HZNUVwBC66G6xfm3wHC666FHqKGZfAsSvYASqeXGtfpjkrr22d2TbNnZrhtPcqKvbwaSgbqvx",
  "key25": "3Xdoj2Qo5mNrBUbLvcLrUSa3BVYaRUrLNukoQmzqRdXrqAziTfpJqimq8gWCrX3NQqGA9AcudoPEFEkSn33RYBiP",
  "key26": "4L5UpDhfC2fqebGwp159bffRdFcP1aYbLVkiN4mXyZbJp9bRe6zkfBfcex48mvQ1cHWm182T9ETFYKfZMP4SdEji",
  "key27": "3goSNdvFAoNHKzAwzhk17JTyMHE5Z3FDkYo8Po39kWQWiQq2MQsyrKEsXQuNd9UiuaM5veM6NYUPYwtvNpMmmuu8",
  "key28": "2m2ixMxdaqmPhUQohqFffCBpKVreQwXby6Wf9ogeSycvHXVBErhsSzskf11ahTp2MmUeF4vGxicyqPTjRkYFyuHc",
  "key29": "4SVeoZ9neLRMxCjUmCQwuu5D8sVs1t5uMTEbh16BHv3FiE57ATVfqjNCxGzZLDYhCuTerqUvude1yWufmXVXe9v2",
  "key30": "CVCDJE5vf8p7RdazLffi19NCPLntoqUTBwSkFMykMKP6KfTj78dVCYjvdJq77bdiRkrw7BkuTPeBfE1jyHsPoSA",
  "key31": "4nQhj6k2PWGgRbDehtfrFg6iHXwB8daPBCbqxSrR1aESUXhbjNqwj7uULvEJiJeo7jivWLohvUbcoXf5FJnzs44p",
  "key32": "xaEnnAT97NtkZAYnZSc8EK81hHtJhpfWAJxZhicHHd69F9jcKdP67XhCpRmjBLdYXsTv37yrfAjQhjBorNPoYs4",
  "key33": "2kU7cHmLxGCAwPH7ifgSQWWSQhtCtDno7KerTc3bzYZWQvvjrQeLuPdwbFhzVu6ZNnrK5MJpTperX4n4KqRvqfhT",
  "key34": "39XGXevX9BAfBYbre4CVs77U6rHLsWjvyhgv8XbomJroMFjyX2BEZ45sBjngpJnSHpd8Znkgm64c6S6bqX7Jwy3S",
  "key35": "Qz8dP81TqxGkkogKfU148xRX6ek1oZUsYZBgPUACCobpuXw8H3GbGLPoM4sgnePx9KmsQAGDhzYRCKh3NdqhRH6",
  "key36": "2EdZc7QY4N82JGMDu7o1VbJWv88o2EbFaagAvFmXH6yTf62zbg9ABMyr84LT7McwhdqePBF5YcNx6C1qqDnZLj1Z",
  "key37": "5NeCNGKi9BEwcQchFyPPknvcDsHgFxaYgeic3gXAQ3DwCg4jv6ECufyzbuioPyVz3h3uetqQJkQzr91HQYdDyCt2",
  "key38": "573ARsi117K64hPLxhXHo4vKpJWgSKumzWRaBZLmJwpzGTunDjmNevdqzDAw4Ga8BXrir9X8UAzfeoDLJHwoENng",
  "key39": "2MNuBS2qaSVpnYezvHpL67qF43i925nwdf6hCWnQbucpZNnbwrxXtk5sfLT1GNkS8h473Pjus7duwNz2g8kwF92c",
  "key40": "3PAzFLNBCZnw6yrwZ2bZaKogF73nYgXutLT5N6JsWZhjfainBXKFrrdDVSY6CBhQNMJ3WpL6x2GSJNUNA4peX2zr",
  "key41": "45vbAhKKA7tgrKBMSMN5GoBqePv7hWq1UcdvfpRzYor1tny3J9iyMkaqAV1hzmgHLTbKNakDPancdVCLiXudzfvM",
  "key42": "3yHNXjN7wfwm7XqVuAf9Qg6rgB9DLQ5bQtDgaQRp13KZjKu81yFj8jDczzKBhrACekfFthK51nPL1bzDFFJSnaCz",
  "key43": "5arFjydsR61QoLv8fAMhjcqRQWTL8nL2566EWJ5ttnbegaMb8yy9wK5QgwJWFdEwdQs3njojwCZASvZ4ceeYMADS",
  "key44": "5m5eN5mEHrqsfCbWEQGXUwChndkqKLircqorP8xE77WU3g5EmzfPZFkcXJjNSWKf71aG3yMudU2w9zT3rE3Gk71p",
  "key45": "5L7wKYjmHb3i7F8kq346aduEt6T3MPA8wGiBNNpzgGzgUrzciuMdGv1wJdMSVUdotEYEARYnKfmgdNJ1WgNYi4BJ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
