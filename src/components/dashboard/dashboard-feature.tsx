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
    "4kwoZx5ntoXaCHF7RBPc8nVQFTFWLQkfRuhJ2YMRWZhFjnHkud4P9KMvDMiDvjJ4GYThPNr8jgUnPbtEPcW4j4UH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R992XScRH9sHpMaHLGci5Qmgqth55KbskKnKtQyJHg49y7P4LqezmX9vdJ5ZwWLE7hmeQUWLpvamckPPCiRCtrn",
  "key1": "2K8qDNRsAV8JmENiKYSmepey1A6bp74T5iqbYL3iHKGudyX5Jhe151ujqBsGjG6dAahEww1WDMpM7sDXmJkc3Wfw",
  "key2": "2vd8NZ4PbQqBu2pJ4ynQaBatEgMY5j3Mc3Pm9X4RkkhheAhUYKJ7dmxKyKK5A4rEtqGziiM1ESrpzdV4Cvuaje3E",
  "key3": "dUhogDVfLEmTupP57Zh1BTDV8fLi1QZ69PvrFwHibu9FqQrAJQyc66JGn5vDnRMKjpcwBc7RLivZkizK9PiaZbz",
  "key4": "67WaS9NE6m9gJFQgN9gcNKqkG5zGA2dFNwzvEui6S5cBJ9tdeTmVvzzg1Ufmt39Jn29shmgaXz9VEHwd14mwZVX7",
  "key5": "5ao2oVFe8W5c3y9WHDsMn18pdNsivVX2B4NynhHom9a98tDxgmAmDknWAj7w6BLvQ9nfyBziSPjukg1nyZr2agV5",
  "key6": "3Giy2PPWHcWkFUQ6YdnZoAiB3qTeSwDqeEoPG26QRgeTQx47zZryssfUkCkB7gsXMMH14u9qQM6N1DrhCb5ybcJL",
  "key7": "YcLztY1HESM4diEc4bnUJQucJoPvGeDMYDR4H8Ho4BdcuxVtvnNpCRevnepfmdWXpSS4W1QkChjRCyRDCSdrYWV",
  "key8": "5qyz1AwJEQPyAHtS2kTuXihPVHv57aTsduAqhBprEz6jZYrZh4x1HFsLv64ArsxZbsiw6f7p87qCFmNSXAC92oqq",
  "key9": "4QRxUckBMng2Z8FfLpym6hR48vgETVbiEcTvLPeLP1NdpM9eV1fzJ1HKaYnUZvaxLmz5Jdo3dsTft15Zohov3mER",
  "key10": "NV6zPLRyh9XR1fTSBqxRDeWcsurcY17Z9csUJbsKCCGmEcTyAznDYa4WDauqixoCL1fysSbW9TmMY3cdb9HetN9",
  "key11": "3s6VfgCB5KhiSQ9ikBXd3ywMWjbXy6LqEAcgigFCeDjzkJvNwqG2Sjw2cL6C1EiQzPJ3nwM8ZX2pds5PxrtNiBSJ",
  "key12": "2wAwJkskFfsfXgB8CqkUKbvnFEfwNQb2vYpNTFZ9RaEQBwn2Zgwk62PdssnqCTkwTzuP7HxQGniqdhE9b7tSUZjY",
  "key13": "4fGDFJF6rrHhYzKrZK1ikfxhADmU88rfRVnqazH7tsQb5qSHaBBysYARKdMLNf323PGdCTe68M8rsuVwFcZbzEM8",
  "key14": "56kbi7cmExXKZ4njZSZ4weJAAj6VvA2Bk6f8WgHgspmkwo7msq1Go861jZG3RB2NkyDD2hso7Cy8guh2TTe2TNrs",
  "key15": "4fsM2Fdv4nRVfyp4pVhgi54qni6xDNT1QcESw9MVacZ5c5R47jrNC4QubgrzAW3LX5C546N4WFCTq9pPeJmYQkMh",
  "key16": "QhHvCgamNfj5EJKVKkqVUW97btWVKktC4fJ83y5FeFoLZiccs6UqDw2bTo8CsZqNL2d4hfhb5WqgsSCrRBuAGhs",
  "key17": "4sNHhu3HTjrRr5ofX2LzrGtDahdgT9WHuD8vNyERSosFVm2GAFy4UkyQ58oBGxwyMcJybZiRrvkKKCRqwXfwNvJG",
  "key18": "4vhT3y4XRMaWKCVxmWcMSZH6aVrptjNVWfF7E9HBPgXxBBQ8sMuKaW7CxbTH6Bkrtd3Ry9PJoR2xxKnq3PszYvwa",
  "key19": "3GGbEJALfhGZTzUyWk2mtpsD1abL8xC46dsJPjDTP1gYVAom54StxrBb4bQUSwvirBwPpNKysHXJz5e68h8VdaXE",
  "key20": "1jtYE2vvBJpx7Ce6GbFmyB1gFjR5R9DsmG5takFgR928ZqfXEwf9uCaYE7mpopUPXKKiyTNghHAgCVhmiHC9toG",
  "key21": "gPReCiEmCN7if3PMkrHXp9fqx74oBHo8zbve1pkbXwgrGQiu5Gy79XBRWnRwQfDFxfyuxzhtGHGadYB6529wq2c",
  "key22": "3pdCzBePGcu7NinY2VhUvdwpLMkDZPkUsYYZZvHJjDcwvCPKYR429uvPZAG9FKdf6uTxYayoHF6MkD1hSoRZTuun",
  "key23": "3pbqT4cqLhTPnDSnJrJmwTVrtV8UQpToKXUV5FzRk4cArbWWt1owwhUxcrzB7Z73oEaND7g2YKE4g274YNUtpqgJ",
  "key24": "MJFpXbcc1kJcCaf6SfCfVDX47JZqqBe8X1afg3MAJtE35VjkJnyZY3UCgYd5Qxqdf5Pbn1ao4iNmyuTRzZCkyqt",
  "key25": "4VCwiZQs4D1a19o1ZMPcMYJcEhkAGjtF65Lqwjoy3btbZsPmw53oxSSVCmwhr43qBZ3mz1L9BnpVAToW59z17xZr",
  "key26": "4vikGNLCDTf4xtrBezXNvsPT5HU2vXchogZ3nZx6dq8yAzSp14zwKn6bFRaeT7XcUfR1hfgG67iTwsDAUmnvZbrf",
  "key27": "4ZSu3AfjVg2jThfcXUbMZD61ULjovUmfucQLnrQzP9dVzsf4QE7ro9z3T41pEt2BiLZcEXNgjotWsGAdTKP68y66",
  "key28": "38qwoUb6iGeu8pgbxi2oYdd1Dkqwh4Wjh1oUQ3kz4rHPtFCSGFYYAWb4XVp4uh3JErXCfaus7SeECxLZ8PMg8t4q",
  "key29": "3e9G5moSZdHmVLMLZhskCHafbs64x7QtZ9uewHLgTdvAhZFtxMrCpnDZXoxeF9YNVisiQmJhTkrpadEhen3NDjFb",
  "key30": "5UQazLBbjnPpBedJQsjQD8h15oGNM3ZxyZAwmh5ime5qKtXLnQuNAbpdKaERfRJWmECRWv41j3V2PmRzci9jrxX9",
  "key31": "RZBVWeuyWpZQWNSr97JKc4WBC5xCUeShyasWi86AYyB49SFkMbu3LDZVXppWDvFWguHSMi9RaDkT4XeJDbcHbFj",
  "key32": "385fzMpiyietFoKpFXaofHjnsNeAfbhp8aeB73fToDgKFfVKGYQzBK5vcFuYH9W2eX1esibr1dYbmpodsjrhUfDr",
  "key33": "29wovgaDowZoeABKgXSBDX3zKXUeQUiZeXhWbdseScbaYU3tPtKEAFZLNJhXqbRaqATW9FNhjwvBJHy3HkNzmd91",
  "key34": "3CodoriCuKhmNECs9x2gQvyNKGcBtWWtHppGaZeypDcVT2A5i7z45VwsnvX2ar7FtyUfXDMMds177a4PQU3hCqyv",
  "key35": "3HNW9dNanNmhXBH3nkKSjJx9vHzmNBYcSRVoKFmL19mWWdLp2sHp7RDhMHhw8ww1zkagx7i5xzDm7FBkceif7M1o",
  "key36": "rvNtsbT4DKZ2iys5H81iaey9xzijeeDFPEgCDgxKAXsH1H3cfRgWog4Qrok3nAsv48mAp2xqx6Yfrmv7L84beUK",
  "key37": "9Uta77CNp1zaFaxcedc8TZMhCS7pfwpH5rH4E98Sr4bhwtbuP1qu2fdDj3JS92wGgke6cfTi52EQWnB4VAxb5dR",
  "key38": "3mcJi56VjNVxLTemC6UekFDDMbDNeTFwprjK42EVmENYy7cSFHRLktLhZamKfFiFzSKg5cAPvmYMRicy32GirzZT",
  "key39": "5r3yAyVxqCSDtLf2iBbq2HRWJE4xXA2zevmTYpwAjzqkWyHpLZzrbqnMwmoVdSjfhqZqkzAK5kmbNWbTTs8Fmm52",
  "key40": "5fFoE2ofE9QCLqT3KF4x232MEDZgTVffDv8gW6CuUQoBYhZb85j5Qo3WFqmaUQQaSXTAJdJN5BmJw6beU8o4AaDQ",
  "key41": "4RaDbmUowGFJbahPqJQG8yjUEdEBbAiNzX9SMS5eSrktb4KrJEEYUA4Q5hagdCFzfMZSP4hQTB9xybujE4Akpb5a",
  "key42": "4at1YHwSPkLdPhSwfR7CSQp7yFnh9pVWxKFP1oqNA7KoKtngWgb96SB6xom4e15sbAZixLvQT1AXRcopmVYxuVWZ",
  "key43": "2HbyA2yyhj3gqFyuELCZpQ8ry3fVAP68ZoRrAWZtSWioPGYKHUnsYTkxwBALLohs4sD45EDnkfaPKvJmMesey2qq",
  "key44": "4nSnduocAtN4S7vbiwGpLRqxNBYBVSsgNerzuP4DA7XdvpBAEkGpNcxB6uHx3uUR9ntY3nQzmuq6YTXwRq3scCib",
  "key45": "GyrANbDmQi9wGByPKk6usZ1VWrZjPFeBpCJuUmLsuC6Wfw7u3EsygrXCXVGjFi1yQDwSKCh75WrKdsgheqqLgXE",
  "key46": "41V68j5mcHaD93srT54rHVrYRvu5dDDLDkdKdf8fg2Y95566ncSdm3v2KxaNV3MBvMfohSMZoEFPHbqqikv1dLBn",
  "key47": "5CyJxd2yxcoSydD6pEDBGsdkYbWtXSDwyrgT6ufnJybdu396i63J5qsJBVn68AhBzNJ4yDUyZhi9z43Qh659uTq4"
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
