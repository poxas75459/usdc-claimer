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
    "3HuT4ALCsbUct44SHQLxfDms8ZPkRhVCYg5qZnJ3vtzxoLEt3wVhJUEeLmzQC9DKq3kJDcjChsES2Tx6SdTTWLwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3poYZbiUJYiMCn45NBQSx2jCZyyBvBBUcMvq69pa8i1h9LtPaKQUpjKDEnRUeM7Lt5pp2wjx3qyQbhzvakp3ugdr",
  "key1": "5UJhV1T7YgcNPjq9o4T6ujkUi9sWnnjqzno47mMYoLvUwB9FzFjVpMS19Wd8rfiagmB78RjhKM9iPGTEmg85Wq3a",
  "key2": "36ogBgrwwDEQt3Qrhhi1qiLDxeaeFr7G46tJEzvibfe3z4d76534mH27MLjuVwHMWEUmhh4FMcG3r3npqDcgsPUj",
  "key3": "3gSWLt95pTE7is5FRo3qvxK94ytrMnxWg9Sp8QYNADLoUPt58s5VPWzxqL9hvhpx9nowa1W2PpsCbUQiQQfZpz3p",
  "key4": "3vnCumAkWyCzGkUjBKVmKTvF53xvkQsEMvVvC2yJHw6oYWnTXxYfELkFetUHFcNvafaaAdXuri7BEWN167kDY45b",
  "key5": "5cXo6m7tBVzBjvEjKaKRsDzFhM83YsivYkTbc9VWEkmLFzsuwh1VgF1mivjYcPcpuVUvzET1rGUw2rfnwA4rxZBy",
  "key6": "2ENv9StdpoEighgV56Y9YM2m1cHht2vPuUhtWi66aDLNbNYK85QF4SX3MdwmF2oxkh6rLDbiJQMkFpUgcjkgAN8d",
  "key7": "53VSKVXNT4Ux91iDY2hgHm3Syjg9ouQGct7EHKbTR5nt1Gpg3s6uvQpd1GWNdG7KpmUp69Q5ZKrWAK48tkF1WtGJ",
  "key8": "2YsfK2p14oUQMm8heYr7YracV5BTrpDWJEPvECc3CRmcTjNYEBwrJCRZTdfP1QqtrTeuEXuFG2pGgCMGcnWtYzWy",
  "key9": "4865FpRkLw2YXAigkd9Ro2S2Rm7s9m3SMRPiJcsE52UX8AWYSgez93xmosvwprBPuBCwphj5KcVFFQVWYEo6bvba",
  "key10": "24e4yFBwg3r7S2s4kBNjwdddg8YiwYuu6192yxDX3ukqoW8cgZ3za8aZieHdwXhynBtUNZu2yKHQm1ywijKQfxrf",
  "key11": "46WRFxe93ica5v6awdyUK7Wr4DURuQ7iAp6zYAKLAeuaP6ZzkyWaCSw4q8H26EZC8fTMpTEPL4aCi4Dmtd9ZK6AS",
  "key12": "aNVeQiTaeav9B98MUBhJWVkdCmyk2UnP99oLVTgis6XCsMKQ11vG5J9PnprGbFQjvCbByMTnPizJxvr9nU6JYpn",
  "key13": "RVxhAvx5KaJ54kE4umuvzfjYKJrRRTs5amV4cS4VRoDiZ3WRtBf751sckQN5V5bp4D85trCsAY8Lh47roqXg9b5",
  "key14": "5CY88CCGXq6KogHJ8AXpHMyu96hrD9EVtuRWurVcdjj1YWFDTeCxzGAp2PGnyMLiWxL2wTZkvwvqmkPshjtU2k8m",
  "key15": "5CSNFm2H51pAqeVZY5tQrpLoi4kwgPvxqxfH4TR37TzzXVyFZkghXunyrofWkPBW8LksjiBhQde57rgtVynrgZWj",
  "key16": "2DVBwsja2QM4Z9axNF25r9yrcLZq4r96qqz9CHsYyUxu5qwLWmqBFS7mJnsYn994ptMj4XHuKDt4wJXy2jMzMqRG",
  "key17": "2HmPDDnW4Vj96CjoP9yQS5smUueepuAr7oJK5rCZBZKcKpFxmShbjAzd5AxqcEGwgmkRpnUCNFzM6BwyYt6QuPLm",
  "key18": "3J3HiLUFRteeP7ZL6Nz2rSPoRw8v26nPovhYrWeyeExCWtP8Kn1zPSB33gZ6Cu3DAn6355jJyk7BoZU8gJDR93nq",
  "key19": "44mbprc9YQ3A2X1SoNcfrkPk5Qe23X5tCfmRP3BSAqWdGb7Sybt1PE8MVpUGMmceye6gEyoeUvcuJ1CMhvGf2j6E",
  "key20": "TYrxZvZ9eAcaoWybR7ksJ1P7XfQPnecoBd2tdUFDGzQM911aQSkBbQ9Fw1NSgNXLjTbcZWQgxHT9HjRmGYZuXFz",
  "key21": "27MQzAdKEjf9JPSRSnwh3pV9sAEVHg5KMmJBxyMxutcSC1UkLp1r6uDhGqfgg2gxWLqZzg6rGrq8Z95c2517S5iz",
  "key22": "2JThVnvvojMiw8jsXuujcQji1wJL1yFBJyz2DGQUxQ2TiEFJF82zfQouMUmrmr66ShMSat6CGRAPURA1tc7WxF7z",
  "key23": "53AMg2EMXfgmTqWRg4YX9kEmAjwTu14eiF33uAoAaGPNPh8n6eaoZ6iRmnsBUx5V4UWjFSzSncvzMHXkK9iVyqxE",
  "key24": "2uEbNDrsdyu4WhWV9A9Ec56kwtG4NDLa4jfM2KSoJEdiWfDm2sX7aiXsn3ct68qHUuvDKJghMpFy1ibQX6UnQ2u1",
  "key25": "2Ac88FdZxoPgai38rRKywsNPzVsGJ32Qe9YzReDtbuAs5msLa7sHb9bs3oZRpscVYMVxRdV94HSknfgY4NnqTXxk",
  "key26": "trNVUAJiL8ZGmcWD8TJECRxjk6neiR8Xg97Rx4isYgM4eJu2UxDWoUKWRcTPL1QFNF9433vQ5BL7g2V7WEjYquD",
  "key27": "4c9EqmtsZR6yYx7KKvTFg9sHkapMAPS3WzuTBExFT1ExHgEDzV3MpouCqfJWsUNV7RdPJSAfTZAXcyeFX6iNejY8",
  "key28": "2TKBnQxZKY4nJoYqZJLWfveFwQxAGikx7fUMgsaMGYQp4Cf4kUBgRKcBjy25pytLNQ7BDUZ2kNDAkdQHzdU2vsnB",
  "key29": "5sgAyqJoWsmY4n3nKQFMRcNHwRmZzrzTCaCee17cZUy6fnssjpewC3f4rsCVvAFhS8qGHRG4DbLDRjMRvomZdQtw"
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
