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
    "3xQ6iiPDDwbTF9NrAfr5t8UwuQto4iWrsjYa4JUEdgnVTWS5uvPkvZcXdEk6mJbMiWX8Tx4CbmjJVBvf8dwfAeZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SmHGtyVK1rN9Dr1oyiPBfTC6ZkjHho2NfLqU7HP8tyVCkjFRsXQZSCjB64p9hsRxQwfCE2gyTNPBMs4Gxo7eKCQ",
  "key1": "2sRDg8PgVKGzEWy4KmaVWUr633GFm4Zz2bYJJLbjoYepEyvepaFRYVp8vF4ktAWXmz2UaWtV5oVfcE6GmXFdGZPA",
  "key2": "2ApCfvNjzBJUhT7fpwW99Q3bHG53v9hpNuKu3TB1YgXshTtTmGx95xZVHXG1UBPvEQpY4LTEnSBcuvqpu3CsAnis",
  "key3": "3yhKmTTuXanTGJGSTuCzLAqH4YFcJfg6P3cysT9wGAfn5tnPbBVNGpVsQg1GzVUJ6q2Ea3XRXHF5d9NiQpa16SfW",
  "key4": "3PUg7x1s9zwcYDCv1MpxDPtnbh6YSH8m5NbioTp4fU4uqbU1oBkwTagxWDiMsKdBPUTBXXzGRrCQ3zGQDFP1fnbD",
  "key5": "2MKLLbDkjxqNHYkBJrf2A5WtWxr9bPMynBJUXBYxSDUigkUdJ7j4YfiVo4CvNLaWKJxNqAKZTiviSEeREUoSRQCb",
  "key6": "3VrNgGUaoY1VeQ2DLn514NQMw84ZFpXY1HcEmMX57aVfDp2Rg1NQppAEg1ewAfAyqDEbkKQRjbqEayf5ZwUtdwD2",
  "key7": "3gzP2UtSmo4Ace3ZrwTS2VvEsEQQdGda5WVWkyufoWG8PnoTuzWtVoFwEwg9wTBmjfcrURfU3N6VCfFmkmMFbFtY",
  "key8": "2Mf5qAE8cihhH21rEu9LJMBKgzuJm9FbZWGPvZ5EqYABwX3WYTceJ8ffR97J9hXYZMHZuzKC95VTQhZqQSE9jy4R",
  "key9": "KyChQQTMXHtJkN7PrxZoiDiyNtiXZC1Q4nxVPh3g58iJ4JwyZkSt3LDBF4K8TYnJbZmzUm5maxNdJuAho544QHF",
  "key10": "5oMHt6m3V8wF5vXnNDV3m4KyyTGr3yHZVawY4ZfeiaNSjdF7fmv5jHuuqqJ4iZFGqSLeTtsYecjRyHLDojsVUmQV",
  "key11": "5as9YWTVhR7wp8yHPDRnJHHRvW7zWx4VoTAb8jcxnLacS57VaFQaS7YmG9YmyQ8V12pH7vDGsLFb3XEQTUcoKSk3",
  "key12": "4pT8wKX1jWRUD3GQtRbKRt8tf2742st7WjQGFp4aJx3r2b4nDLSsB54sEo8Hacisnoy3vMzeeC6rksiDQdHmKY7B",
  "key13": "fhy7p1eE6SiQgLcakedqj2rRKVg8ALYXUHkumXiNns5LGsfVHR75wENrirBAmVFDLWd6fDuZwRDWUgrWSBJTZoA",
  "key14": "67VZfThu1AvSNpjCGxMq1rktWypR1sgz6kWWvivNYwnE3FQNnMufsN5LkeiAtsN42ETy2muWDJvriNzEVU9MXzg4",
  "key15": "4iCFxZjvNXrmHtKECo9MbgcXtGQ55sccU62pN13YRmDYFBdtw741nv8U5mWm47RRgDhjx8SWbpMQjcdsnXHSpg7f",
  "key16": "5uz5Q3wsuM1ZRQefZxj2fWe2HDw7LxqqLURRDEoTASQKzzkZxXPaURm1udsiv6vAJK7Y1gqshGLrPWa8WWip1Mfc",
  "key17": "2AnncGsNL7UyVbSfD7axLuS7aaZSUTLgXLhBNjLJCCEK3bbn6vn7xREoivgBER3aqvrDZ5sUKT3Pss6q8N3qQVxn",
  "key18": "2Mf7tNmPovJEEEhVRsMU1ykX95NNdeCqFkAdUf6mH2cpeU6S7tDgFed99KQmamiMJS4ocqn1TKdWMbYuoFJyJFrW",
  "key19": "4Sk7LMy6DnvshrUqUEpqCWLLTjRLLeYZ3e8kVaPRtdQrSjHG1fjRen6yEtKndHnNgGGvdZhSv34juw1nzXcSoAJ8",
  "key20": "gfnzEvcgJ9RU7GG4eekEA6doQpBhQQ8G1UXucQYcvTQTQdVmLoH7A7aU4exUJPPKTMMFYyiLPEwgc7PBfD3Fj9Q",
  "key21": "4QygBD5SW4HxKSCcXzFy8PyvLFRWwkUq2z1iNFkE8RqDG9rHJiXLr4f7xQtnUmXf8zWwA6cwCYTETNqF8QwRq5uU",
  "key22": "4YJAKXQLZqjkPjm95yhY6EkavbuGxb2MeUWA2DowEpd1XDSFsXwxtsvGGGb6KfdodsSicJ3jJJzFJvJMcKM7Y6vh",
  "key23": "2pjJhyqRYbmyhzcCaceWUuEsLTqtTEzG1Sh7k7KBCbFuh6JQDMV35RWmEVeAnDgzGUU8sMiRxrcqK3BypeMpXZHN",
  "key24": "5nwvJTTeFuyS9zZScWzrSTcqn2LiedfpYMqDX7jYX3hP6LxWVd1pde5Vyt1mzxetMXZmPkuRhaDRZnuYzKWUi8ry",
  "key25": "2TetfQZ7X63j8ykU5xYCPMs1bQo1oyy5j6hqjm1XsNv1xtzq54fw9zkNKQ67gYq1beT7xSXkoeMKCT6ruGmgQpru",
  "key26": "3wkRg712e2S9LFJ2rEpF4Wxu3wdpbnCokCT1CtN23dvB7grteUQF82GLcjC8FiazHhrxKTTBDRuTKQ4NU4ncxUai",
  "key27": "2cmm44EME2kMZER7yQE2BsaewbmEYdMDDPQE1SmPK4bGqA54frc5BokHmiqjeUtc7ab8ERkxTy1oeiNHzdFHdrWm",
  "key28": "4DASHeQYjMUhATcdWStXPMkfEi7xh3uPVNe9S9fQJVvWuAm5moPVscmRFKptbeP4iDCqENZT17YebpbypfwneuUn",
  "key29": "4FzdXB5GoVyS4Ftjb34S887HGahmoaxtHV1UHLcacd7dm2hqpZRCqRegNcUJbKWBLweosbZYUeE2UbrUsSvw35TM",
  "key30": "3uiXNHjE3n7ax8agDXvkyHvJWcB2XP87G2f4eedFvR1gHgsU2dKueu5MLjPVpxWegEMmcpPiJPrUdxDQz93HeJsv",
  "key31": "3DCYeP5o4aGaC76Lm7KYLbTYhtWa2FCJnZyA167WxqxKruBxfBCpopdJns8yD3o1uyY8fuY4DZUWdhmPUbq7CPt1",
  "key32": "2YTyW1iq9MbaZKtjnnqPGnvtETa3ihbJd2FkpB6w99dsjhm2XSobicd2MJ3CGn3ygLgjxgwcu62vTZsFtbdFDpS2",
  "key33": "548VX94cWcMWpjHDKJqUTKFaDvnoZCvBQN5bjj7FN6maR4bvDUYbPRH3eF6HLdhizD2GweAcow6g31fchnHK9THG",
  "key34": "bhnCS8P58CpBQU5PdWCxw8wXt3V1fcSRw3jsP6rTJAZxeehdPjonDYWqttAUfDHQycqZXoMR4EKDzt67PP9TVQt",
  "key35": "2RBm9M5mparGYiZNeZBaz4qYthewjwMQRhugdn2Nt6ttEQmugyLz95PVs4jUMS4s7mTBKxP3Y1U5rQM1NJhKgYxQ",
  "key36": "5gQcDXcUvzYHvaKSWdoN8usvqineDm42pfFPd5inu4Jj8SfdE7sd5GCPQwSi3X1MpW6Cq1LjDhf2TmzQyqtEsPhP",
  "key37": "2QrTKcDTL3eUVJqyYjmqygVYEawsueFTmePwPNWpe6qVr7kUEzjiriZgJpER7EXuTmUspMat7ygw9vuQm1iB9q5f",
  "key38": "5j9ZoW5JDJyDFCSq7LeF1Tfs7ieBaCusPQJzBhxXN2dorqxz4ygjoP1a2aLqxuFHFvaM3bMCRPYD9qKm4qXiGzvG",
  "key39": "669BhCk19tdchnunYdPQzDbTYEZFGUokH4yQgpeZTwZdCqWuZmRzuwkvmEAdkNNYCcW6Wv2v9AtgKkqM1a3TkTvS",
  "key40": "3vn22dhqXzsxU6GPY5uda3bL1y8KwcdeGKeCSP1XBzk2ZMMKFMsFwZS8WonGBehbeHzbkP4hgNt2DAW1QPdnG2RJ",
  "key41": "2puNGYL677oqjrcH8L8kHLNLEHPe7qNdL782XuK3xH1LcHuyd4gRTvvSWXg6RLAvJiBnmZBYGuEHtyE3s3VFgAY4",
  "key42": "4DqowHxBMsEefGEYpwkTYp1ZWFe5HwfnZjYDQxikrWKAfAsZnQYKZYYUMducqCHKP72fXdh9krWSdfj3zdsEQRYa",
  "key43": "5Gf5CwSqqQuPCRiuW1kBUutFNU9cMwaDgkJmod7mC5DFvCo7cee2nDVWDahBqB6LBFfKbzCA4QhKdpPEymzbgpUz",
  "key44": "3FaukugqnSHPFtdxk6E2Z8Z6mT98u5gFecDyHY5sMSVotyTuySLgJ3jcJW8hKNqF4J8vkBf4ozpUmSn86NPTbJ6Z",
  "key45": "QiqtVeNHm1iK8wAsAbthDovwB1KjZW6NUaexYBXKLXe9HeSPbfbAgNZ25xthWhRLDrkQk64MdNLgoRx6kdbVKAK",
  "key46": "2mWgqnB5n764VGoppsskM8baxyJ1V7eaUzAfJqHe6gcx9w1vmaqVYqWkiCFk3Gjqy2dCskr6YiYkWiwoChSwezkP"
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
