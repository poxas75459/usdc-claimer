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
    "6F4xs4q5QMidkhqPcNEFjCGN6QPqRxo66nKkRWMqKRXmd5v3KGhjYoPjFPKPrDn8jVsx1bZKeYFgg3NiC6GBwMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FqKW3KGD5PZcjVPG3TM4ezgMmUAxFwSTqw4x2kjtUVkgRTCCdYMKobbFPMMyngc62br1u6hNkoR8b5menzy88Ja",
  "key1": "4XGHzsTaEJtvamcuGjgQvo12QpRkowBLF34poQsvpDGLC3Ym9WqZ5bBRWcGoYUMnn6MLbV2Unebn6hfc28mrn9uF",
  "key2": "5n86Sr5p562ZQtHYFbTR9mR3yom4K4vodXhMe5qodn2vJwQ1imYB1QGjc5titSxVgsjPcvQUsjHXNYPmv1VJoBHe",
  "key3": "3sT5UeotJ5q4fHTAP7HAxAAiyd5ybURBeieNPurFUjCTfUfBRd2F79HZCGnfEbCCnMb2AGDVrzyUM4pXppXtsAKN",
  "key4": "4RAD7Nui7NoyzfDDqKbfeZ8MeC8Pni72M8zZ45VR7F5vwtP8UkkkkBZDuapYdhD2qmcBU22vFBpTL3ZxZcZWZW2b",
  "key5": "5bvfEV94TWRhpbuwETC5LAEuzAG9oeGZrELTNqj6eSutNig5HQP4sWABP9NHB8ThEVeZrRH6yHGoj4pMMUiiZTQ3",
  "key6": "SDAHVb28vJpV2LSaESM3TZx2jzSyaCB6vrjYe74VWYuowFhEWFkHvyhazsbXdjXNr1Ge9yMmrvruJsJFvoDSYs4",
  "key7": "36BL1qWJvdabnXxNFueHdt8szW1SkT7aEoVUgNPPftR5siM6EHnryXofLveaYuvLzVEVnjjsoXX3gwMXVMmqi2Ag",
  "key8": "5cJtKQK65GzLxj4m4TTPeAjYmG9vuk5opu3eV1ELUQNCqaZ1jXXiYXm6Zh1M8duXERGqdKA4Si9VcZ9pBz7NJg7a",
  "key9": "XMEpCW3pcvNWeq2fsfaLXk8dUCpXMXj7tNvW3PvmfAwEbG2PWGViqP69tLBjR18KbmDcYfLkiE23iDoAZmcpbyw",
  "key10": "3voNbkqXCm16Do9Ph4BVRSS3SV7Y3ZaVmgAQBWnedxBqj2mAzS6CuwZH73txXfE2knLfad7Ddos2j2WzcTuzyRaL",
  "key11": "sjh1AVTTfhcsdqjFgj4X4y3A7kx94h87HFPpeeHGfLiCeu1puRLDLcaYHBd2sukt1pEm8TfQi5W5EWx3DszPUCC",
  "key12": "4qBJR1AvkZRYbd9rDi735dShZVJzsiHMu29rjiMcpaMviGgzVrPBKzDdcYdx4T5KFt1R3hVNirQCpmKJ22xCxxDZ",
  "key13": "2zLYAsCb4tcRkbEeRXCuVpu35HP9xVbAEVDztpmB4yNu5vg368dNMnivvvcUhqRAhxCPDGXqDWp3yepUUjVVYZMr",
  "key14": "47F9o5pTujCjPNEqnf6DfWDA6ALnPEsmWoFrU7RibJgCKexPR2jYXEFAmnVpnCZq8HTsFeLUUbiQGCWXPUixxxoR",
  "key15": "3b5zphG363y6mw3fjQqrZnu9PEdpj1GK28VsTBrzuyRkXmaDEbeo5d3th1YB9soae7FRbWsekEgC7MrpCtH8qWVr",
  "key16": "5rpaorHHCJ4H8XkMwr4i7kztEN7ZX4unKQqHoPzjz49etHtQYVeJYmhEvndwhFD8yULx3HHWA1nRoCYroGU2ciA9",
  "key17": "24L38eMQpNKCRkxxK2Vfy88BpG4b2usVgZBudTELPk3JEv5Y9PSzJzU1naqsJgDximkgnANrpFE839dKug4JzMU6",
  "key18": "5rNx8oBgK8rggH9mmbySykfiKoAEuovfA8AtrLxppYwpz15LyxqfgNwfSF7EZZZun69nEMA25v8nEXKjFztGZvVF",
  "key19": "3ky8Yke7MZWVUKhz8ECNSn5FZvnsAScRsF4tosKnLgYHfqkjCxVJxsvouqfWbhxhDQAWnzVZ1PN7cQebvMTpBBQz",
  "key20": "4bRsmKeqcGup53Dd2iKQkhdETL4RHzRxR2rVGALo7uU7rQdqtZkhUuG1UW257pVNF59SNtQ8dHptyQEGS1jHbPbd",
  "key21": "4a2ef23G41zKUGkA83xovJGaruSEspw67irK75U4yWYGF8anY8iXPaLMLmaYN6CsT5rKWC5AxvzX2mXnxrFoXH6e",
  "key22": "3fYQS4DstkYy8nv3qYoQNAnDR6J91PbeBRmwnuMqJ13W5Sih3uTGeVv9hHaCGfNp8HU5XTGj19HuEDwwiBB2FkNf",
  "key23": "2pRCo6gUuG3XDhPb3vjowid12kv4zuGtBSkDDPmTYdXjYudeCJ7tpyC8NVdQGdYbXtX2FiX5w3ZTHszGo4gUkpTS",
  "key24": "5c39eCbS5mj7Du6NUxKd9xZP7tu3ThnjKckSzMNyh8wM5T9ZkRV3zNPVsof9nb5RrkX4aT87o1sefgbsXRYgFQNp",
  "key25": "25AX5pJvTJ23NdJWFgiH9f4tepKdrJUnWxfPcrZUfug4uchb3kPyPj6bFin9WvYuGg4BGHu4pLNfkzkRzcZzXgkk",
  "key26": "2LhPbTazckrUywMS1ZRDsQEV21SVpcyRLWm2WYVZVQxCNG89MFoFvcX3M26nTwn1PKdm42M3gY9MnojAkFoebZ6i",
  "key27": "jLKzK1bRfXKMNK3qDeYxi5K2cNBfKEPytK4Lfb9Na6ChVz8PYde2uhuu9pCDFZ2yhR1douPYSWnUYKzv8HcgDHD",
  "key28": "5rVAJWJexVRXVdd57aCZY6XxzdBu3EMuMT9ufBhi3ki4q8SqEAPLGXdRg1LHjzkTDomKijTtimgv1cPPHNYqUBKK",
  "key29": "2DEnuTPFVPo1okzMPMVMbP3v61W6rEGqVwJBWHXHPdpECzKpDZhoxuktt8gyTiChxgqmHRjWquNkqYG6vwrqGy6D",
  "key30": "4BBt57Z7Y4tQywuuGueMXK7VPpBhH4Yrt7oZZ7R31kcjYbBEUGLbhEBCyoN3LYzdZspbKaoDUK9FrGXVHhgKRo33",
  "key31": "2mueoP55xAH2CY6DCUaiC1PrSFBb6LW1v9fDXGMFAxH8eFm3gUV63jh5G6zgukxS71aWtk1dbLL2y2KtRP1xdsF6",
  "key32": "2GirByutxnyyVg2RZzAZ8zABCiEmfMmCacjcx4CeQviCdgJDoMLjkqca52VZNqevDKnZoANj4VNK2ZcspZn7Zd69",
  "key33": "2nBhbTpa8CUjocV89Sz9wN3uLWDwREiqMjfDkgj9T1eVDqo2EU1drkcmbkiHwDLniD9NFpv8r46GroKaBq9aLB2g",
  "key34": "4gBjNvBPfHi6b5twdcYapgv6ZoTrrZdwax5UV71yH2QANmwXMf3LoPhBGK9SZyyEgjg6vNTajdqHSJsSXjcfZx89",
  "key35": "4DME1Fv9iw41HYBBeZzPEtFfXMxUFh39GdEqCvPerwWhTBeixCzdmkYYotZWgBhs3M82pCo4yAjWuarCoC7ueHRf",
  "key36": "7K8pqvRUuaoTKNTL1HijssaRGKbBqcUMZ7TKCScnAVbJb3kibUhbwSRBWNftEgKRPkhvmn9PkCP7Tnu5HiK2dH9",
  "key37": "4KutEBovL4BLFDYVtRiiMNmn9XpKSQCxgZpjmHBkfpGSa9sZFLBcRhYPCFLsbXinw1YLCubsiHhAQfePQhud39My",
  "key38": "2p8HBagk7Uw2nJr17TnUVdYAvpWhCLeTvFo3MsKwSWMaTShiuMr9Mxs3RhXr3hDubTuZFydivDXnhvgjZ5Vugjir",
  "key39": "3jdXFACYHRM1o5bP4CF346c85Kusb5HREpgLnSGBtgHf5bsqoEaWcn6HrSFVb3W8RPvfrBtdvcG8oM1LcCEtLPEf",
  "key40": "5BS2LUKtBwY4etKGmJ7ijDjPwZjmSgfNGgyVfYVwaMxpVp8SXmKS4hi5Rw2NJdDUy2qKDXXkfSHBK6by7YLoH1Ls",
  "key41": "4ST1eSNxwbwZiBDADNfAvGfUGbCaKzKKG2M4AzoD5cziY9yQAfcFkjypRfogVtkhP5a8wAkbYWRTwAxq5uu2urQu",
  "key42": "29xt7GxQihY7jwnikiCNeN7WkwqD9C7VSJFmp8K29UGBtsKuoTYk6zPERzcNewgjJC5rCUhnsvkzY3wG2bXehXB3",
  "key43": "5JX5QjYoKoiQpHV7VrkoT7USUwbgBQDK8nX6Rwmjo7GbK5CAFxR7yLz69j7osh28yUnGGVwrMikL74YvHtZcLYYa",
  "key44": "223NYTYPyRKLrwLxZDtHbjxm7BTrUpYxbArNJQfm7fgU7SDT2es8vHqKLMMe9giew8ijj86cUxxGGLjkuQYTzrrs",
  "key45": "2RVEzporqKmQg5MTsUo3Tb8r6VMnfWSCUDFGKXBmroGn99kui5xEmciGCXeeobRSQPAYtKsxsUb3qsQcDuCkPZTe",
  "key46": "2Kkg6j2UnC7tDLdRVnTkEwkVCMaYqMR7Yec7hFJgnv5Q6gGoq8PBjjdVnFrWnD5aoSwfaHwi7LHkWNKCuZxhmNZN",
  "key47": "2TQoU49CUMF9NurShAwTh4SDQ6KNDJP7pdAtEwvVhRzf1AfSgYcmH3fFDYWK1G81apVmamepCQzM6BvTHgvEU58M"
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
