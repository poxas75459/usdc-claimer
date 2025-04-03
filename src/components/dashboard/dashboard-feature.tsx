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
    "5k8sxa8yKm23iwUGE8UvCR2Db7D1JYhd8hYqAHwbfEL87x2U1kkRZhSo3snaKfnYRX2iaeoS1NRGqfa1DMRHn3wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mCdZcDyu4onWSSvLrMBF7xrse7NQGtP3zR85GV2QKR18U8LtLUrhnGfzCqUaxMzPjHePt8fi3dFG7cbTeEcQ4fp",
  "key1": "4U8yu8sixnNAixtJUQSXQK5JykSsLFfZkQYpt7UFqmbPj5RXuQHs6QK7XPrrS1BFkto2NszoGSoxVDANx5wQwbh9",
  "key2": "5AbNAVWJZKeHu8cUtLsTWw9Y6iodom7Cu21bxAH35Umw2auBYggbgp2X8EXq1WugXpViTpENZr5vszdieCZHYvGz",
  "key3": "2WgjYTwHG9Tujfpf8zkhxVAot611rpHEFJVvtMkCuqH3NTfp5C1Arvhx3ZoM2xiyzkjNmCn2v8XNdzD7vz4v1T7t",
  "key4": "2d1XutujwxqLrMQ8vkK8iztcJmZnDfn8dHmsGotMSXzwKB8GMZcyu4KworsVUrBcMBHBGgZV9tg1cEtsTQ6W5LuY",
  "key5": "3gVpw5BNWGQLAnLdYHkym1byboCFJhwMVPhoDxzV397DxyjEK9uVVc5JXYVhs8LpTWZwtaZgmRELA5S8i9UAwcsx",
  "key6": "3LHcPM85DdW1kCtYkUet1RwMRb7jYrUr9QqNUZLxnqZRDdNCwAEvfC4VXxT3XdyuREQzpmG6BkADndCvFW94uH9A",
  "key7": "3mNf3fFXe9pgUcqAM8gCPxi8ieEQLAN9ua5Bi3W1DZWFVgg3TyeDTuc1hiQMwRMY9Jiy42KFSMiQcySYLAxjhURx",
  "key8": "2618HNBYrDb1E23ukzKLb8Ze42MNRwWZgzGHAWuKtDxzywYu9yP8diRcAKNgvhKmuEDZDfhKVWiQVbqdAUM3kn7c",
  "key9": "4PdtsSgsxjq6znoEqLvwLL5RTqu4mNpwCtQEs6RQ6WET9LSN1Ng3r8hboW9cBh5abdQ8SbyWqk7GHC7fGwDuUCDw",
  "key10": "5gCUBC6y8aJnSEh2T8u9Xe2NTry9RMKuaJbnpe9CEjJj9A5qg68kxDo2DkBp5GxMZoHdeh6gSYEBYJDtU9PDb1Pu",
  "key11": "3Z9jhzNBjt3Hs6opGrVjkqy3X4Q5QSkwc5KqBq9jZw7h5Q16Hu6JFKRsvjRNi5XVkHGLKbkpQfsH3kRk59xKGU2q",
  "key12": "2bKa2i5rN8xPw6867WmjZ3WmnAXG7vJzf1Vdd6jrWSqNGTVvz8zNYRWyH5izhL9C35tNTtGuxfTLCqqiVqudCEBd",
  "key13": "8dbZsdhxQzxihoNsLraU5xVawTSZqu5iUkfGoz4gD3FiEBDPAQfuTGqF4pXWt16NANGgJj819iSZDPCpq45Twsm",
  "key14": "3zUXA8UJs7vNG5LWyodevHqP6w2Gnz55zJmZJUH2a931R4ct9fBLD72YVa5bYoBZsVSfBqGqZmtScqPdSWvxWSTb",
  "key15": "3tkKdnimT8q5XavpQ2aueHKeTfX6FxyqQbdocHToZ79iRK76BaL5JB5Vwb45GQJ63sySuxHuNn9cvk83NzKjPC2H",
  "key16": "4zS7Bia64are4VDbK9dAZdZzzCcSjDL2EBco8TKu4fmee4ehKukeh57z4aURe9HbaLkCGTg2mgkkkHJx33vGy2RE",
  "key17": "44jiDPf9WXnSjRfEEz5oR6CfWRtgTZssRW4qnBR6NC9Vox1WNSaJdpXK4HoWom8TNV6vEfHwWgxt2gMfys28YLSz",
  "key18": "5iMSGCDyD6d3ci73NZbBGj1NWp22jbqDB2iBxRfWX2nNKo5oNuqE1wd5odk2pMGnTWeQXyfzCJU7cgUaLNBy5Ykj",
  "key19": "2bd9rwGWwHECAcT1Rm6Nonwb6iNefEoJs7fVXQMKFSLdEAtBUSeCCuceLMEqrxNm6pZD2J4Vg97BXJ8Srhds4gEc",
  "key20": "4iurNRLthocchoMYrSJGwPeemJUNxWkPinJ85nma5qGQASZ66bonbkLBkRSeAeca2kSUNTdojKw9d7iEQkVzaJby",
  "key21": "3yBmxGX2CU8bPd6nguYUKkuyL8hLxtBYCxxx7iXRYGXBSmvctpL99wFjtbufTP9YMhQy1eh9rNLyWeEiufqtuZkF",
  "key22": "2BvuEgPWu4bkeH56atLddsHNC69m343DCksNBqEhFW4LCgNUcUExRQdP2Boaaa64XEvBdmmcJFiJFzrPEvRNyXSh",
  "key23": "2s9pbHZFoVdmqX3cYQHv8J6HaZgvKYnLdMsDk22dh1QZPUZ2SXWBn86yrbrmdYV3M2PxF8dvHqUHrk247i69BMub",
  "key24": "2dQxPEKWNsk3H9TnBkNS1Ng32obvXrpdmrBGVFhWswLAtzfJwUyYZt9Z4uUJZmBtswXsC51xjytVB5xeZCaUUpgY",
  "key25": "3eRyX6kuoY3zZikrgaSSEzo33RmoEhCSC4mr9GLQ2HMaPRFQxWe6JzTnjC7kazyyMuNvDzfoSXCDHp3sP1ES5HaM",
  "key26": "2TPVSVRcsAxexAV7UVTMPQDRG7eQd5gS3JcRgyJc1g3jrhDn51AcBnKr3kD5mn7Yk7AVNfPpT1u5pFgfQcKvuBnf",
  "key27": "TVJbagFQHj9YsK4oBLWH1kP8UF1Gdx3QSTfEeceC2t1msyffyJAWBPZ4PpE8yoMDhbBFjyi5ZF78anF8bhhMn63",
  "key28": "4Qc4RLQg8dXJHhiaAeP84AJ6DToviNC4YpMdZhn2f9adQXiVM4tWEJ5Q2KZ2nnsB22wmfm5XEXzBKUNxQiQoZe2Z",
  "key29": "3GnXy8xr11ESDu6y4uAvbKGagZXSD1wfsUcGzkUnhzF9bdECuvF8d96Z7DzyVM3dJAhDsDyAmUBfiAiYWYK5He3e",
  "key30": "2FDNieLhpRnYALLj38iprzVMYhjvHqjshPUmWffFhcVnpC6XSozk2LAdqCNyZKH8TdMvQvigpKKVZopmo63iG4VB",
  "key31": "4HiqnfgSBLnw3GrxGWzwaCoTDtu9vQ1SDV3f64kfsQs9Gxnuix6FRqHuTrZjXmTDifqU2SDWmCjEUCyNzxGANcvp",
  "key32": "2rBZ63yG9WCGfT9CUnMD75sm6dku81iTwTqs1MFX84av8qPHJAQE94PG4gd42kXNjFQ6HbqMWWwmfFKuYESoH9SY",
  "key33": "PwJHx4vqNQrprVpUcPDzwN8zDBncA2c1AMw3P61Q29CCPrjNmAQvsXaMFsrfrwzcJbYRXhvn1ga7H2BNmwdm8ci",
  "key34": "2GzGedVoWzfDYfVYuvEAaFWWdUXmxzfEf7sgSx5q3PDDbYVi7Vj4BtvcVh3RWzcGqvuquVwcca21BQx3MpapEwfQ",
  "key35": "2oGYZEiJUoDgkVbwYNRTES4W7bHnm8r44jHBuZhUdKerJAewAZ8Ut7LP1EP8zZzPmJm7E7pRNPS11FJCvt5yfAQ",
  "key36": "5yhue4ygYPR7mUM43QFpDcbk56muQVf5BJQU91SVGCN8JW6SvcgxyznT5Fy4FuACP7Lkj1MVMvviJPZ8wbD81MEy"
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
