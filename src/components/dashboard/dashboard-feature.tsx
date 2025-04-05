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
    "5QWi4EmicbycxFBz2Gpccjr2JWcEbZ8trhbJHsrqrQFdQ2KqE2Kw1nrN6m9XoQX18fahdAvqGBJmxAhr15E1gZnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54oxoBa5XVaXLaMupib1QesfUGGWytcVUUvcs6YX6o7QsH77xPEN4qLBQYsFTaTP2Kfzrh48jrvxkSVL6pBBiMcd",
  "key1": "3YsBNpFeSU1kvUPz4ECG9NEM66X1yHnJxQhfdFvv9aLf7ZMF1ojJNNoZqiuSigTKMpt5PDrv1GcXPmgxEu4nqMRi",
  "key2": "4Nogpa2hiMkijk1b4MJCXdAWUid3XoP3tSzLmhRRafJgfkRMJnpUtJoafVuSDfkTKu9JVnF2eJY4TabnssmcmHbB",
  "key3": "3AwkxLe4PMPQufzgWMM6tumQrDHPL7UCxegS88g7cw6VmcSrpxGCWUh9vgyfUoMqPu2syC4SVuxTH5tzYUuBMQmk",
  "key4": "3aAN4rqXYktPhni9jRfyqP83yFR11b6DZwu9hjPfySFSWdrQ37qehN2ygrJg1vMPkByWxvJyCNMJefWnrVgjpj8G",
  "key5": "2EnRFnDxXQNBkSy5PmuLHg8WCVZ1sHCEhAVb2xy77cCCkufrysMkbfoQYKB1teaGDtg17N7Ek3DCFTXNhsVnGZGw",
  "key6": "4YoQ9p2PVevNbuK4md6Vk49WGkmGefTrMgbCtk1FsN77JQagM8cEQHwefc9rEdT2yhVX8w4KAMjas5JGnrdXbc18",
  "key7": "3VUxbevCX8Jsbyvc9KW83261qNvdjrNJHkepEAcYPMkCa9RfnrU7YgMZD6YddezwzAJNrKGKmBqGVX2To1JXHHiH",
  "key8": "3CdSCQnYN34ucN7sGWsKdzHDpNnW8L6qcwKU43njF5MdQbfGFycAm7kfhxNVThZPsEPi4AFAmYHyrQixme6KCyBD",
  "key9": "5gCZrHQAVRP18MRMA5o6BBJmqKGHkwh4YpDnECjo1t98KocWDDRKajRpwFppPPo6AWSm3sspGpt2dNySE57AHueu",
  "key10": "mTBck5awgwqbUYkdzosyRDMLWtTDdhk8PKEUfSuKF6gjKbURWRhWf6sbNrmwmWifbt7eXBz7YbhDrH4mrCBDtPK",
  "key11": "4JCwUVBFbP7Hs7HcontjpU4GeJG6WeuaHWqh4bBhhFAT2uaUsMBPNzSoKNjZf3Sh5emQxvrv5uCB6igABdzTPka1",
  "key12": "5Wid39sE3v6McWSdSLqyeztUdf81PjaB3MC6qrvEdEDjCjHhrTkvc2sjEGRRGgM2M5KcmdFyMMJ4ught8p8PJcC7",
  "key13": "fGHC7kdcCEBAypmU4hU4acZekgKkYBnFMFQYG5Ve65Ji5vwqEbNpcu4pRyt8EjSco2QL3NiswYZrYRtN1hwhVce",
  "key14": "jdUWCFCxPCRsXcYvXa32RtMarkecX528kUaC2MFpn3pgLJV7uXQqFXA3z1GdZoNHggQ1ppbWjeu5T2eU5WzESEe",
  "key15": "5T7GVGN4fvCABBXoDtHDVBRWLni2Djd6yJsVAYtGiHWqbU9yNusEGDKrhAaDRBe8grHUfFk57T7BHzBKEcRMLezQ",
  "key16": "aZmgfTFdkizNHsmqwyxfd66tFySTC2GqpFARhuDHVcdpwSjmANG4VBEVptpsm7XsxcLqMpMDSNQrc6CpYBBWMYW",
  "key17": "3iizrRcTo7YXD4SpFCa9gb1LvBnSVPR4e95H7EvxWBuEu7GUBUZM5QDPeL89hoQ2FgxwzaCND6W4b9fqETYtzQuU",
  "key18": "VezuMfTCDZFAvcb2eMHv1eA23ffEma8D6XbdYGi7eagyLnDRJauieSEqye2ovyy3VQPLXCvgtL1nrDocNPsgtyi",
  "key19": "4EWfU8gbFBzbA1gcifzxsa5eJsor9Phv9UaKqVVbNBzNMCbvMgX6N4nfPH67nwV9kEmfWLVA5UmJkwpHdDhgZ3GU",
  "key20": "41qNYav1jZcDahSZ9jwDkhhiwPQkNdLVDHdWCLR1kUhGyNLjd6f4p2ySRmfnhuhxjmdTeVanaHitLWgF3CSb73TS",
  "key21": "4SnKVqyTRSZQKTwUhQF1VqZDigxrv3wrbck727N4Luaa4sFeqYDfeVcwCVuY5iQb9CNDaFDAJmSvT4sbNDyhTDDG",
  "key22": "4Qn19i3jRLAsuMZ5trhSywEerr86Frd13bnHJvqQoiZt2tTRxqmx1ZkX7B1242jwoG8seQm6UJDd6r2ZzA7AhCfr",
  "key23": "3j2VSSrBNw35AGMWYnKPuuG1TWaRuGitYuqSd6QjKgZ6hgtwa6U9EyB8orV5C8WEU4ZutLnYdsnMbaCavijM3XPu",
  "key24": "5tJJnNGDJPzg9MmmZssdRFk3esPUZt87RRgq5RSX6H9341dmCapYVD36SgXUJWyMV1sUJAuANWrNXebX9hZTjXk2",
  "key25": "22ScpjGC4Enwpm7dnn7pxCcsqxz2p4qDnEzVFd7nB4mnGcPih5EijroP72Eu3KbkJ7qZP9vmWAZwEvZWRnT8AwpS",
  "key26": "2Qn1bp55QN3AwjNGoj2Exp7LQFqDUqa8Yv59ATaKBF1kyxtCXZev641UcZoesbMdyFCafHyzHsurZWWfnQuxmJuT",
  "key27": "265KC1tMauwgPWNieY1dakDTXu4tBdahMJG57cGSj7D3ekbJv5voozsuWriUD3NHH45hkePP6nttJbzsP4Gub4Dx",
  "key28": "3EYYK9Pse18amheaA6RAoioD13AAyMMQyUgyqtTe9yGNSn7UMpjcWpWCEJPUWUDfqDX1FDgcpoLLmKmngdwbXQHy",
  "key29": "2UBJFkeEZq9hUdqoAnpbdo5p1ymdhA9hW6Urk45E1vHDLQmCxXibfbAzER8Q7J1QF4WyTWw7Ven984wZtHLzte22",
  "key30": "4DLbgfFrnETfyjmxpS6Wj8wLom5sa1BteDGStLn1PtLV1X7eh7SrkCmiDRCETu5p8kz2SUuDk2tQSuj6XFrzF9S6",
  "key31": "4YSoyuWTMLSqSSPoNb8AQvtiggtSsznper7qeTkHr8TMKNeCmeahsY3zyaep8Fu3CsW29ckYus9aQ55cPLwz8hiq",
  "key32": "38W2CD1hfdMV8s1VRSPK9dGh9DXv5F6iDSC6JuvMRjyLE7R1KQjZhJZqHJhTrqP7cyvHjYuLyhYYfQ2u7JuYR3qd"
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
