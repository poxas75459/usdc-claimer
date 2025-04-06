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
    "32KdEEEjSJc5nRMt21vSAixRi7ixXhtFRbxa6mcqBpMtjnzS4WQRSmh2o9aoUUVvQm4cqDnmaW3csjjkS6qaMEqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dq34pdQMWwCsTTQhsgVmnvrMxZUYa1U6s3XXUYCbi2GbydafUqPgT9WbTyUM6sL7WhorYbBzWQEnSwSWfVcKxYf",
  "key1": "4WDyTpKTeAnzDfk5RRRQDbbCUaYVYjBcmL8VjZQrgWv1iwER5u7cnHtzBUYeDVv1YnyoTmttFYYzWBzeP9pXHbmp",
  "key2": "2ohSRigdwZK41h4RPPdHW2LUdqcQvkTBnyGP8usEXJ4SbhHimBc2U5eiiVEr2jdks93y4zgxN647msgM5HkCEeZA",
  "key3": "5hKMGT4sXHuTpEpefsLLszkjMhdvoL7uGL4rskCi2jH2obGPAgaet7uSdDsqT1QgqT1eSaNBCMC8vQNvhU9eRsYz",
  "key4": "53s1TUeogceEE2bGbsmoteuue73qMpbiPRoUj56CREdCkE2mYKdLnJKrMiuy7M1qHNEXMg8yPpk7XXssqhENUTnY",
  "key5": "4RfCdANfKyHT8Jie5wyqfTc3E4B58Ri1fcEmMfikZ8ukF9cJ7miRYAAyay77i5hnrkoUby1PhSuSzGHXTST96Vop",
  "key6": "JD6WVxpYfBkMG1mGhQDDNAWnML7NDyNrV4coooaiyRmxdCukJgZKQaLMJ9BehwoU6xnJSA2KM5xt2bcPJgRpLPX",
  "key7": "5WoTCtXM2Fd3RZHjLnUq5nVYXPrDCes4djsT1oCyNA1DLVFr5DraKDfayk5fsoKGU7yFZtMLQMredTRfzbP8VE8u",
  "key8": "5casiTAvH6eZAmbuekFJFhZSsM4gT1E8tp7xhLJetKxLAMpPaWJAhSPuRKW9YxGvSC11RzDLEC48a7KfsDrjrSG2",
  "key9": "53yrjPVYMe2Ma2xFYnZbTH1BDXrmACRFyLecNniStFissescPiFwUDxzP4F5351FH9sts6MwtDqWQ4qh4AyBeNVT",
  "key10": "4VTtrWrm1vpEviwQJtQLWuBWJWmfKonBVVqtG9nH9phvY4uA5vNWj92sdYBQ2eJRnDR9Q6CRjk1KsWa9wU4qn8zx",
  "key11": "cFY1FAQ8wxtBs6LubjfbWC1HjcHvAXbWwAJ88RBXbg3iJKfrsLE7cn7DfQsY6SZCaNjnaByDEn4PssHj6XewZ1L",
  "key12": "3shhCc3H7y1wqZkwAa9j6GVXVk9hAoYFMWMejocJ86m7NgCKaDPT8nwpCT42XBuN44mhLov8zQtQMgWmw5CCP32a",
  "key13": "5NidxjBnW9gc58o83Se6deHuyymrYU9eBQjdAqS8zeVf4WXhZqURxmqcLENMidbFHAj1pePtGo1iwKhbWVaZXoX",
  "key14": "3LQRYdakRoHDy2jeYizCEA9uEGEHFYmn1VefKnDRMtu1nS4dbLAJq47MeH6FoaH2Pigg2ZPyWj1Dm2XTpHkzPX2W",
  "key15": "2FNPNkDM1ufcfFsQqCXqGhQ2yoMmEWhXavknnLW9SmpiTRLCGmFwPJys63rdR5DWEWkat3PS6jxCXvRxPbCHcenX",
  "key16": "4CCM1gpNeRxgPFsuVEJvES5z9fiuYxjx8viYKVeEhr7RA9yYsDzkqtRvyXvY486DGsmcL22S5XM4VFVd4nfa1MUt",
  "key17": "4ZpWcjNECCPKEq5agLf4Czk2r6arFkNp6XqgrQuGh3SpXQc5sUwU89nNE1E7gzUmgZ2c4bty71PcZuKN6kgJoQxG",
  "key18": "4KfMa6vdmvubNUGBk5eoP2bnW5crPY2TwgMtH5ytMTVTycCcJ1eBmywFu7pS84TqTayRAT7d4zSkY7xxW4p7ke99",
  "key19": "NP2vZCNifyqc2JmphQmp1KyXGiD3uKxRitENcU4NNbMP4SgTq8dnrchWRr73S4ybwe7BLjvGzEYhq1X6LF2ugvv",
  "key20": "5FrEBiZwpd8hZaZV1PBaXTRpuYoakibbcFGbi1oTxvhDnhg6UGA1fTAW2sFyCqunjTHy2qErBE8DjnM1QQcncHBs",
  "key21": "4BqZga1B4ufT764tqV1g6oaM4NgECS24TfmD4J7yCLxQDrWa9wV3NsTbnKED2Endowe4ZTqBkzeNUdNnXwmabBi5",
  "key22": "fwruKARsUMM69SXXpKDPaqZAM4stt2NsxJx5ggNrxnAT9qsejDn6x7CjGw4kZzbonAsWYc3aBiTbxEXqXVySNbr",
  "key23": "2D6akckCqrespr8zvp7cTkkEvV3NPQuvCBZKhMLaR7CAWRKNc9nWcRmSKEcBDwycPa4fKeJudKbatVa3CFRWVZFs",
  "key24": "5bNEiRpkpL96ub5mRirhRLTZT9YvExPKikprbqZDyi1xcd4UbK8wWYn66y395uwU6oTViHa2pmcbC2yUSHXu4RvX",
  "key25": "3xc9pv2DwqvpSjbrGpM3SQMFfiZuXu5vGm1swrJ9mmF1H1bRdT2ucWaao52Kfh9uGJYkQvjfZ2pmjY78aSo7sDZ",
  "key26": "r2yreEF8Rr2oQtRj4nmUAr3Dbe8TyZdDQfJebG8yxMsPwUJCN7CMdfiA78QTxVADkxxGQQmkybmECf2f8EcpHmU",
  "key27": "4GvzdGjPeG4Z6Lh5sJCWMBsC6THPCDDthj2eyRpzkoGfjaNaRqbhxK9RMG8UjKndrMCrY1Agi3KxX9pc9JFfXn3F",
  "key28": "3hPe5zR4AnTbPwu3YUqgzGdRbF9Xw5WqFssQ3AudtGFvWGHE2cGmrCbrtrX7jmDYxZWoLrwYEUKawqn7TjTsvJdD",
  "key29": "4ySB8m3i4WoJJMkcYGCc4ZsuVoRTL4oirFsyY5BQPZuJepA4gqqGtNzAizhfFHDxiFwyaXAWfKFUuo667kTGQ6C3",
  "key30": "2CkD96Qi55iCZjkPyjqSKsTTW21yMzvtacMX7ir4waTwBYjW36dR96Dpozvur1cddEqEa2s2DmYwF2yPpbL1ky7K",
  "key31": "2tsmzcGFy8DXg2R8tTmrdFiV9aacaYFwu8nwEvXuj1WjhkBXHxKsC8Y46yxgk9fDy8wWJzCWjbqraSv8Liqh7N89"
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
