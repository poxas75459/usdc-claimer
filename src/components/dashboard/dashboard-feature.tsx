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
    "2shBKobhAV8wmMxizTW82mnwPweb95hCHokHbHoeRdfoaE25QQs1Y87VWzUrQxDeuxAxvKxiVJ4gmBXSug3r9c2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k95kQeWCsiWZ6cbn7CHKNZfUYD85LVaa3j67MzCziB36VUufh1JuVKBx3dUYtorKELDJvc2zqGFCoYSermyMo5F",
  "key1": "5f9ByWBgBVRPYKBsnrRFQ5jiYNLGkrxqJr7JAUzcdhfSspVe8HPJuQdwZxCHjSffJzMQpeJfX1mrGwCYm6iGWaj",
  "key2": "5YronePCakURnKn7mg7tAWz6ouEGyNB5FnAiYwUkcYYxSGScRbJZ7Z1eztbQPox4A4jighsR8ZGs2dswqY5TVch9",
  "key3": "4S2AbzeH6zEDVb6YxEMpkSzyGUXFaG9xNoaYruL5ZvzqoLU3DimPxUACnYomQsnDQ21btt1ubTHq3kWfJPbXb9WG",
  "key4": "4tFJuYJvmToisXdcb1YKV9ert3M7mqjsAgknZYP6pTPegwpqL4Uqov2jecFbHtgHcNZ9wLhzWkKHzeieYDw6Kdzk",
  "key5": "4c6LCaQPemAoz4Z3jSDyWyU2uq9nTYZhD4HUAehd63Fk3BSpCC8gB1KBywAp8tWmePQ9QQxLkrFq4aSBBuwDyJ9d",
  "key6": "3nz6VupBZ7HGPUZoged5SvcmrkPsqhEnUUDmuNLuj8dJmKu8ntAY8gVziGu8nd7FS2NZJcHRBE7hhUtuovnemD6y",
  "key7": "2PEDjJ5sFg58wi616GrKYmp1eQo5THYjLgyAdtQo3AjvHcwDVipc2sEg5Kct6mhiPzf91qWF9greJHJ9MSkWpdRF",
  "key8": "4AqFtgwBaWXxpLFMn7Z55y8xBvtSsLtGM4i9L9aZ1S1hMvcCa3VJawwMoJctMk9Bwh6kwZy5mB3GjK5u1bwHsamG",
  "key9": "ze76KUPnaZjL6DAjfdjFqXLUrtJV4nXxWZn3m1x5KNFrxLRxyqkqLnWHQsyKwUAbwA7qqPbghioSyqvbSRSzHUW",
  "key10": "3RVeMZUiJBu1zv1FTnr4AeU1KcFrGT2ZyAHUf5Vvhe7mtFSWw113T4ipuvtyhhs8qxaLDc7NWBhBYaZdDxzkqbBz",
  "key11": "2NNgPq5GqSxWjMLLxc6zRRU2aCx4PYEK96vFtmc4DWrDht6fG2AYDks1KLovYLnK2Cktv46hq3f4EUSmcX3PPw86",
  "key12": "2cDBqxuUdLaURKmMHfFg4Ezp1zQ9rpBnt9ypyhFtyX9ccX8w6gjpzJyUXsPT32Ts56xoVMAxAfHJym2pjpXz4YTN",
  "key13": "2utxGA2ePJ28tW1rc4Gdzfmc439u685Kf7KGk2Dv7uvPm9jGgpK9uxo7Lw6XtwqL14FA5tYB6mLAp1RXUB37kQ5w",
  "key14": "34gELGUa29WvXvB17dAWzPsHU3FU84RaMmSFPy7TZ3HEirmUZiiSvukbT516x8ahbLymNPuqbiifwiqWtzW6nup3",
  "key15": "XifykBTPEdrgktvuZ7gD61BJW31Ga8QTtuPujJqzLYk1ovYtAVVBcaR9NbXWUrtTmsNrhSxfGnpx7EX3KgjgEB5",
  "key16": "3BADDxVVDvnWXAmbepC5dBvcqYP9nEBJDwPEGz6gjhRfraA5CxF1saZpsFum6L2pK2jwnaM2ZiwJrGr82r8mVTeN",
  "key17": "2ys951rE1VKytLob8YLF6R4wEaVbqABiHBb9nzZb7qdiFkS3nd6t3HN6ijm4x9p82Q3qV9ohefvMsd6kwXyAsPnT",
  "key18": "3hSHD3eGdLc6wEMQydjqWeL48bYK8T991uRaeJY6fUpntjnuer6GEqHtDDEUSxSnmdc9CoyGDzme6d5g3k6Wwp71",
  "key19": "4RCSh1vSdB8QqQUJnp2CZUmMQDbtQVgHyc1K22toNZXcM1EQbZgKq9rhVt4szjo6KQXhdAUePWvH2jt9DhE2daQe",
  "key20": "5BQUNoc42dXfbnrctb5pbf1XyftYchJLHNWaWJxJyir1Vujrx49JM1vhbQaNS4Vq2b2G2EuLU2pTVcYAQD9KhSyg",
  "key21": "3jYGoJSozBPczNNig2MX2gBzTQSsBfEDqqzxdwHytbaNFzoLJ3dAhRasENx1MXB54pYurLDknCDKkHx6aTLKnCh4",
  "key22": "3WSjZedmaiq5ycxp22jcZRzuLQt4fa1N6om9gkRoYBPoPzogjstSBnXKHjeFqNNTySAn3XwXscYAAvuoKYyst5Vq",
  "key23": "3bQfd57ZxMNXdWo4PJSMFsb1tXyfGuevPMiTPi38aoEeeXogcxzD1gaE8kYjfeK9yvwtxqhGEKmbr3AfF5tRjJw3",
  "key24": "5Chfw1pmBrAKst2GExzdoUKpXd6oENhAiegnDtYd2C8vqR68wn8WQmPMW1utpdPryHprDxZQHpaceHXGx7LZSTui",
  "key25": "jA2KYwhjkQXeTNSh2SFQKDWjdWRhcfm72KJMvbg158tgoeYRwzHSjFRrS1GaUX5gJ8K1QAHBoRGXT4sa1L8ZTf3",
  "key26": "tgFovVwkqDXzfUs2ECPeE4y9Ltfohpj2PWzbWVLwzVR7RZREvZKzhTAfchuUumGy3dMhR3FysvU8bYyfFfAzTeP",
  "key27": "37NmnEHEJCpwEVXdk9aZujdHhjbZccssZbEsAmhYt6QVoeQPT4gkwfWvWaEgaM3MkhjncmMi4huyasuWAdh3yxnE",
  "key28": "5a6iMmgw22y2aU89Yt9mMFLYPrB8VqJJA22XtXfcoPe2bUwgnJ44PY2Mae2KdLq7gFXeRuzsEL5fqLymR7grAxep",
  "key29": "28UiQyKNXXRhhmieQncUFiBdz3HiGR3drjKDBFAzA8jCPDbsihMGVe7d6Q8kGWm6Hvsr5wg6b8g8Ce8zPoTH9JkY",
  "key30": "jpc3PNVkM3g7bBQyvAuZ6tp3TfCqen4zmniwMtA2P43Ap2sDyL5Yi9RTRohcNqasfnkWUVUNN77xet7ADGbkwYz",
  "key31": "2xmYbBZiRgaLFmNFN5hmbhPhmi165qpHMP4Jg93KhdznmJm1o3x7pdb6xJXsfEMtj8XpA5ee5dCFhz2B9W2K9FA8",
  "key32": "3aTjjYPKJLf4Wpkdje6XJ38utpm6yK6ebsZnsGGGzLXcWrPaDbPwaX4svtDUHA2DFNY3wsuc6Q47dR9rnv3UqeRq",
  "key33": "74hV5VYhTygDR9YN4Hm8X5FHUCk8WdtroKRWkCsVdqXc6aj9d6e7pPqbnMCfu6DCfoNcLs9UxSUtWaAPG3eeRJb"
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
