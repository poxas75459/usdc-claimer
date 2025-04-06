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
    "2cgh3JhSwYCUgcyWsfk7c5PRrTwqkJA6XyFmdQpfk3UJNy2TbTPHu4nnTCpMb7XZUTjw9zSbT2GTnZ6jTLtaZqit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Had141N3V7yCfKLUciod1Dyqp16G8pT9D4Q2sSh1BQnG9PnFqHTjxfMsjNs5dTnVKwSELFkorG6robf923h323z",
  "key1": "5CeaifJfw2tXjGxqDQE6hTyB8YrSNew2SuvjZPw24apsAgDuwuzxXSDRpJZsLDApBP1vbpcPUTUkir4pwndhq6eC",
  "key2": "39vvqsMRtM8ujyS4SDtZRty3Jey3cNAAo3mUeMTiUiSYGTAMVe56z5NePr559yqjQT6VBFC7hKE5j6DPsjaW3pFo",
  "key3": "2pmHF4V8g3khjKysy44GQw8PeAzRhRmSJnbBxo5V2irj1mks51kr681o8UNyiNXSvDrrWpvmZtEmU8utaf1LLz1M",
  "key4": "4c4VrCX4BjzoEojrYo3bcLYJafNYF99F9CtxakDYBJyjoumCTxfpdnsd6pR6DrNG3R7ez8rJsDF6GnBQaHAcGMt2",
  "key5": "f6qicwBmuut7tokXBx2dXYb7V9ovpqsm52F96qoZBRHk8dgQr6Gtx81N1M4eL62WeBKjZ7iB6thrJgxTMbdPpD3",
  "key6": "34BduJhokaCRzUqNHFeXnahm2CYi41XYWRKJyHYTiswsmyP9ZBH9DNxuM8VKX22eDP7wRJ2bBjA5MBaAaxr1JkgT",
  "key7": "3weyVxNVubkHNmMGVVPGWccZjvDDiEWGKqnDUmNHWJXiBpB2k7zgdRsvqJqBYkF61VKrn2BH7G96h6jgaswCmANV",
  "key8": "264ngaf6WAQ8dC7Z56w4FgkAtM3QJiPmNRvUEt2rpDXuyWaYmDBzKpAjyiqYgNyzALaNTNLdPiJPcaRasHUDA9iB",
  "key9": "TToXfYMeyqGC232SAL1tqXDt3jhuvyLvc38p6HZAsycFYAFbqQUBmLwvEkVVshSjfcP3cvGSyNUmXMwd5hCpdPE",
  "key10": "3FhJgyoVfu6AKxs9n578SieK9bG7qWk1bWFtY6Lu8NDAQSrg8Kqpc5u5vjckuGqLtwSjq1avA3g85yDgyEZyp1g7",
  "key11": "dNQJ9vsSyzLtoYu7ULwzMsBnY9fBBsyeNU9WDffUpUQWARF2URe9suNNHmnFgegCmMKmkPHqbzPdj6QAcn6GLR4",
  "key12": "5cRsz3WtGfmtQjr5QZ6VjSjZYXqd53yoXnXWzQRxggfDzD6UqkuTj8urDxP4xqJPH4pttkUEYY4tFm399h5QNFDw",
  "key13": "2MhDJzneTgbPNTSqBiHJgrRDJRYiiV1Ncf6EwzdCHtqmzDpDAjZcWm6UckBTpdLT39hWn321mFgjfVVEyLDCXzwF",
  "key14": "51JTVDaWUdmyYKnDUrsyGxfCXouPgtX76r3Av4QWuX6iMaXYHdkrp59AXmChXCQbc6di8NDLUcSZpuzypJUA6MP7",
  "key15": "4SAr7X2SJZXh8wnx8Xq5zRryVN1fEHnm8ZNTQ6P47R1ZQVonP5Pcf5MaHGsnj23U8bXd4pEqbg329fVCz8cVmYsX",
  "key16": "k7bnRJgAsYprvhNNCY98G1JT6b7EMSbx23dr5A9zfrCWjg1FjQxSvNKvxxAbySzU6TczZmTueQF5PoSEiPA6Aox",
  "key17": "F2fHxbe5FoVvw3CtPWdvyZpNP39HTkYQMqDmoJeqSPZ1MKJJFrk8Bpg6LmxDCEGqUe6vHByUdiyoDWbYFwwJyKY",
  "key18": "5ZLKNfTasry6b2ECtNQ5SjNhH72ryJr3Ki38LrdqrpjoxsCuow9QYUVVQR5ZeeJ4X8EUb8vMPmeCFxg1sJAtNz2s",
  "key19": "396qoP2XWVBrMkqwxXghy8gdorUvBW3SbSWe2oh3NgMZBcZtcAqghSyzbAPtEVo9HJjDeLKZsHAsbCj5cDNrZsLa",
  "key20": "4R5h7praPtB4Dd5eeeRN3YPLnc2f8Tf4TqfKM5fkvXWrg3HRsRbvu3n7DBQJxfRsBisDJZULVjftHparxYFVbBSD",
  "key21": "4Vh2aHS4Nf71eAUaWZs2cAMvgwMQpRdTDfCrvBCzoNA1ttvvSyUfZbXAt8Y7G2ME9BiPDkU1owkQGW5Jmu1iRmvp",
  "key22": "3e95CGkVUdZMEy5D3Fitf5cnjjQJ48cqqQWiUxga5RNeMDtMFd5icQWcEQuktck3QuRrcbcZ5YJsKK3nacec7fHr",
  "key23": "sv1ntYMRH8XNPwxH1zfxUjLTmsEmoj3RaTWoShhQ8YwtHb4W1KGMfzZ2RK6BtTQQ9fNBt3twr2MTQd84bdkUJAS",
  "key24": "62vTQYVbvjffNQk52f2HRqMEeDuHfQXgqX9469cftUFHaxZYrrjt65eKSpGmPVnSju9nXwwtywZL4jpNbeHbCcAS",
  "key25": "5bbHoG54CrpfwR3mrrvQ6SGixtRYbVQTdDZatXUhbe3ibANKNDa1Ar1BXwdmw235cUSiqYm1EndYTsuQ17SbsZkw",
  "key26": "dFJmqsVDj3BJMawEPdJ49PsnQjXoQXArFD6EGtNirzgCBrSuxAkUfAY245ELZCYeA7sJ6Bunbh8cVKvJpJvaUBh",
  "key27": "sPdYjScU6rApCE7g2YojyNYVz25DRBcKkZHrdd5j5pCqzzz7hYbB5KwRGng3tWAn7BrcMg3nxaGDPRz8WFEKXSV",
  "key28": "3QC2Cu8M32ab3LoX6Fbprqeo3XXzjEQ8QUg5rL25kdJ9KSCx1y3EE3F5ziRAknNcuueKs28ubiQKQ35jUHUuyGzd",
  "key29": "5G7mmisBu4SU4V3t3uUuWFh8fUJWNPZpGAu6cYDMYXfgTsPd1ktYRBJ5Nncw6kzfRi7w7X6oXT5yD6T6vnZMrMw8",
  "key30": "5wp9UymmV2JyBeCeewAnJ15zXg8AXruaRbyCTpceiD8tt7t9c8Wchz5AK2EBS3nba8iZUEdcGiddm1XKbqREQDFK",
  "key31": "xYFVDDBpchbN7PWwtktKJbpGpCtraQE1LSBLw6kb4Mve8fH631ryZDJkgL6Nzeg4ijs2WPkJ5kx5oSXv1EUdXZZ",
  "key32": "4NVbMDsXJTpD5GJcKakgR5dFSJC3f8CMceoStcgd4stg6UZq2q767d5qY5t1Q2cAzSBvd4qAeAxvuB3voMS4gv4h",
  "key33": "2dbPGKtXoHrZj7msdAzKXTfvr4B1XZHTma7bocruAaq2hQQTCjSWcxTFjooip2ajeaEFuWVagX9sdR3NGiGjVnf9",
  "key34": "2pp2HxkQQqY9oFiUvg2Y9eZC2hdKEukP6MFYf8z8onTfWLabuKohYNV5YKrHuojMzDnpxxpB9roQJNmYAmkgEep1"
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
