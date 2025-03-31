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
    "4dvLUkStuwGLRKbUSqMDxFQFjNq2TYaHoLJZ8g9ByvEJMgdZJK6mDVseLBqGyCRHKnw96JCx6FFb2vq2h3KHFh23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ViJW7qanXQq77PhuU7gNX523Mhouj87hBfDWhVGhsVCKiCw61kvQbdFJw2oDG7LYGD286aWrCoGTyKyrcHRHcnB",
  "key1": "qrc8u3Mq29NWH25ipHWRdNxzgWfYf3MgxQB1B8ZncCR1pXRZz2tArdh2th2BKz6uk1KzXsypRPFXDDZSQ76CtNh",
  "key2": "3H2oPQ2cTPjyRQ8M6W4ofnaPcyLibC5YtVWmvGso4hE7DcsDceiLfhSPYdmUpwWqdyQiUeCG946MFK4PETMYWPAx",
  "key3": "utj3uuEMauGgiupyJFSAvNW6kqUadj1AHtJjdJ5nzuiQW6EqumneZWkrUQx6XE3dQFKAWKy4iErMoH2cftF6s52",
  "key4": "2XBueq4dXJmhtEaeB4yTcCZAbKQZB117485kyEazg7gdTPV18AWhwWWHzzjLHjTdayZVdwniCPG5XjTGXmacnRBP",
  "key5": "3sZKaoUbR7nPJcMoF6KKR1a5m6TNKxPe2eZJfJcqf4gHKBVzda8m84ydoDMMQqacHDAMCuxSYFAQ7NZ3g4r5xRMX",
  "key6": "5S6ZnjXW4QpfZP17Cn7Ma9BZNxZjMsbfqBfwvy7gFHdGnbUwoKLAWAK95T44eUvwY2KcgDKjKn36v7kVpa7cGtHC",
  "key7": "4LskADVwTVGSLBCMLBvzBx7kfSCZJNkfhMN6ocXuTDrr3QNw8sDDWBhCKS1J7u2tBgJ1z3m1A9d1o3GEYofdQgik",
  "key8": "2w2JaD849u2jzVsgaNfnn78QDCcgNAX5sxkZx8x1hpkXBMs9Cx168ZSKxsuKp5fYsnNfvsuhDSTG7GPi3rqqAa8E",
  "key9": "34eeJW9qxper1Zv9Jadgfpwd3aMvRFyZ5FNfjuvVDuhVQ9qJ7p7dTWoyckCC1eJCi7JWmah75sHm2VfoPYWg8BHv",
  "key10": "32jHk5Zn3ZTTm96TdvRaRx4ddqb5wwMUV5Wa32yKRCwXz5ae8bd5pggA1iEqf1JwnaQJR2kQgYNsQrLHSUPE5Brr",
  "key11": "RKAPwA47V1Mmt4QXiSm6LxbVDUaviL1FqwAFPB5LoiNFCtXNdJ8o6nFEC7nuwSb3yjdQDQJLJrC4n5oUeYoSPLt",
  "key12": "4G3afQ4vWNu337RYubzRZ4jy7eQ14qHR87vqZAuWorVrJo7wAUNYto1p4KDwM9wpQYSQPMFzWw73A4PHauWaBSSg",
  "key13": "EoE7XwhrdnDPyJoAUwA8Cy19Sx7ekMEgrvxN5MyxRtbhRfzy3dCBRA2NZt7CK2pWqb9WsN83i4iYjewRAevBhfB",
  "key14": "LtBPtFtDNDFHHTprVpW5k8cZEpj5iHjt1n8MHK4LtPgFEiGCGZ3n8xJiWbEcpcPMa8t2hUsUaeatmhxd1NMYoW9",
  "key15": "3qsfDufK46bRNcvg7WXAp6rvvWFHzrY2j9bvRcWN6wQq4mn4Y2GA7PnqMFyjfz1tVi1igTqVcCHNpV5W8CWFEskZ",
  "key16": "35Ed3KtyNTcEE3p6m62qqgd3XykzmkdZDvLYmJ5r26YQnBwAtf3HZcLsJaDUMADxhbbiLKwqZh8q7raL7jzhDQp7",
  "key17": "2VTmV5yq6vqVAwe5uDxzRYSYViAHcN2z5BWtwNPi6L1ZnujpdfMqZMC47bHbCL9wJZWTNoba578psJk2TKWeSHYf",
  "key18": "65GkcLh5a8PbwWAemu9SsFkmaBTokBxk8honfGXuowpAKC8xyTTfEaTcm5aPRx2WMHtwzYzF6LbDqvxMCtuc5mkM",
  "key19": "3iFWPrXtCKzPob9SnddJo7LP9CCtUKrUdVPmDXTYMcda61PVB19LzSsjYVHdi3LYc6am6JcCMWqCyZsEkPQXXEcz",
  "key20": "2SHe2uzPL5b9rEDJeYgfoXBkgi589SKJijpgQtaVSWCEUsK1ac5fREcuV5eQLDcHQHs9t9i14VVAnp5xmErRo9kc",
  "key21": "5vVXymSzfQuQQMDDYjzKKna3gnD96dR2CJhXJk9P4hn2RVHUUgdpvza6ZP8guCr7L5RfQkgZT7u9JNLEL1o4z3Tg",
  "key22": "5iCcRCKXwXdUtQCzP4sG8hTB3rjNh5xmvuuRnw1GGkVpzfD8aNvEsw16gJtKrRqfG9NMVyr3FvqWyqEAPtZuKjAN",
  "key23": "56eCJEBJAxLg2TLUMxac2pqgqewmGoGkPg1VfvyVaJwHrXC1pDFnWQeCdpzz5P68E2RKWPm4R9TfioxpDVty7p4h",
  "key24": "UGKHeYh3hC2hAs7icD71zdKbFnjL5rLRKMfdkyfQATnLRPwstQxejyekQC22u7LLw7XDg59YWgV4gix44RNohah",
  "key25": "47wEzqCkoKjAAbWXeLHjeairZsjBvU6XhJfPCvvAe8JeLCxTpwF2hENyFzL86Q9XzZ1GkUeBTeosrm8gNFdo2Qrg",
  "key26": "ykmYeyfnnYYtPo7Ffq8iUJ9tf5q7qC4tZijyKUyYC1LFjB3S4VaPXwsG9DN47dDv5Spo4eCBQHKezmCPLQqPX2o",
  "key27": "2gB1qYHij9vR2NP3LQJr9QAzo9qrHETyEMuK3tbuAxusdYWqnRPVfmTGa2KmrogNqqSuHvfRdezWyj7Uhds8bB7t",
  "key28": "3fgW5p8HdnqN93XcrfySFu2kzDw3P7TFwbpcmkSiQQeFvsVsv5qXcqBz59DND7JE7WoYXctmzcMa4AUXXWShqLw6",
  "key29": "51Xcs6i2xzw9vNoBWxoWCtitKVxuLBHLXsUmAYna26WYCCepoMhFdXVq4XCPCE3juYehAGyejEjH7vDtCmBVeBYo",
  "key30": "3n694BoUY1faaD9f19wwTobzeFkfm3hLgpYGCqpCoRKp3BRPny9bTMu1pTC7FuvmuioZYJ7jPJdys35GMsKWEzg",
  "key31": "51h5ei6oPdLRuozyfjpZJo9hpHox1a3xTpnf7eijcKrEv1JojqATwSbgJn4yL1WcpaqQyizNpPaTEnBf9pQLbDJU",
  "key32": "3kLbH87QUPZEAJuCFaF4w3RyDbkfonnNbxCk7toZKPmYAMCM1JKY3dtcBbHAu2UCiuz3BVirCJJWrZuMBSfusAzb",
  "key33": "yAXBEw5hB8u8tGuf8h1VwqLhi99kVjjZbP5udHRPWANxkwjDHKu2hcaQyczqJfWiuZXEd5RFrpZiSHxxmqjVEWE",
  "key34": "2srkuLAmp5z4F1464eSTeFgQgKb1W6YxDdZpFL9hfGqNx3jw9Q1DsJL5pjNFKgJuHoooo1mTb9BQPGrihyiekux4"
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
