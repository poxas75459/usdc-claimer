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
    "2F5Jrw6T5jJrpAEjK5JD7Bedw4XvzYVAFDVk1BJ4Sn8mp4cJDsD9Crp5ujihqW8Pxxu5962npjFnt2njQRBeZMPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1gFfcvgNtJH44awRZbhmY9PJwDY31nf3MnhSZ4YFhgA8edN3HHer2P3YtWxtxEnF2L9DfP1quv6BAjmovWVygg",
  "key1": "2XDKGFs9pDwaAzq1w4tPW7fwecg2dXLMNbMCrCbfqWhuZmRcDqQKNGDZDFkgdYE7hMui9Ep7wuR6qgWSVYcRFZpw",
  "key2": "594KJFzXnd3zwQNcRqPxPSUKiJbYSzkE9gyA2B4rsGkYEK5hsEtQD4UeyACWz9VPwNatBrm6oDu6QS7Z4s6aV5QZ",
  "key3": "2zroLzCtiWhtwGwYabzDsGWiFPtfsrzpkwZA5xJ83D979ZaBKtwcqwHYb22LjoAFh5bxUgMv8mUhnmaLY8i3EJAi",
  "key4": "2EGMfPhF1TSd837uMauiLceUdmk7ikFzyS64p9JBX5gWJtePwCv2ZCmt8fKhdyQQ68mvuw3nTNope4PknU5sfkBs",
  "key5": "DmtbH827wLhquA8EF2toanbktFpQ8SRQFwdY9357ZyZ9dTCZXgCBL6ztiMiGyKg259VrpuJCnR2DH8RxopjXBUn",
  "key6": "32CC3U5LH9Q83gV4iW8oVFZk7GSFygHTMErtqX5fmHB6spXkzeQUxuWUsanATE1XinV5qKEEwvaiwTYSZxCzqtbB",
  "key7": "541tSzbayc1j6HDhoHFCbiv57z4qaiW9akWb8XYeVRVSDWGfuYyQkaXDrdE8UWZwrkJ9oX4JunEmSNWXWiQBRSGM",
  "key8": "5LeE4sjWJvFypYJNqpPBd9cE8jg76Yoba3eYZmDWU16S7cE6XgNGR5ie55an7EAmWbD4UUL7cbJRbrGYDz9B7hLo",
  "key9": "BQoXB7AxwwK4tXZybFnrmZrwhmtsUDSbPfPoLesmbYZcTeVKmqJgY5CfVdQTMY6vukjjvKSankwUVktfaHV9Dgj",
  "key10": "4T36BqaqkPFGB6qg2JLAoLGmtuhPbtvEXWynC6e471UtoycQFbo5vjmkiHRaSnwV5Ui6dCUiXmLEqficU7r4i2Ua",
  "key11": "5nnr119G1jbrzx9ktH3wxxmkDFEPJbpvDp3pRxA9Ry57DrEwfNkxGqLjTxB7JHmGkk4UQrKnGwgnBLdPNe9xDatT",
  "key12": "3eUFkmHgBNBDNPSrCXJJhGZ2GZdDVaq6HricE57BkXAW3PMX3kLoR5rxQxabdn6vgHXv4x26TLjjPxG9GSJnVaQA",
  "key13": "55T7WBsm7EmSJ3KzvdwGa4rYxyvxuG3FEGpjNh8398TtHWgu48BxfhMUPKpcMNyRxA83ALCaaddxnKkNSsGkUGQm",
  "key14": "44inDgLeUVKWTWd6N8BURfyGR8CnB8Li6NtarTs31jsrnQXP2HqnMS73bn6hupmP3qnXMWusMjfuRLhBtxt3QmmY",
  "key15": "3d6iwh1EoaruUuYT5EoKRR7eFiLuzdQFRU4GE3LVygrdSSkvrvoK4xgbEWomBSEjWMnhze7mbASjkAcMmAuG7rmG",
  "key16": "3GJJma8UHKkPK2evTpmko5sNsuJCdmCgUgXCNFyEQg8hWvbwzJAfoahCBjfLj38EMup6ANfP846CE6YQ8w6RX7Gv",
  "key17": "2KqWwArXZr8FTpko5TJ4R7t7d3jfngXQqedLjCULgZq6LNZA496tF43NfHb77HYvozLmMBJBJGcvnXDhuASfCe2y",
  "key18": "4UaDfX1mnyHMsNCsZiYDGcTyov1c4g1bvKc6HBg3gy6RQEXSZyscrNnW7as5wkknEypRJ9cRavXSYU11M7JAEk1G",
  "key19": "4365Pt7PWKiK39eZSTYrmEQNhfxSe8iNfyHr94aFbPgqgrpZe8dJcqL3CFPw5MN3YwEYZ8MTu9cYytXsaTacLAgB",
  "key20": "253hwvxQ7d4pUosBArAD9H77XeeWr4L8zLRCA8wpfFSKPz6fE7PDPENEXrzdUv1gxt4Kqxz7UdwVLCnpBuh7SRiu",
  "key21": "3jaYbr8yGuVmevLF1fmjE4rCnrNsMimudZzQPcTa2CwuLDJtbaiMeQDdg6bebJtNjytzMNtCqhED1GVymXXdGw4C",
  "key22": "5gczhqvbbkFC3x5SPQtZs1BTWUqCwHyPEASnGoT2wpXJWGiimQwREj1c8LWESbdDyg6SSV2Drok4TDUZYfBWvTXc",
  "key23": "5fuvhzoS6MnmsH8LM4cwBnjgAFCHBdafMzhM52Yj9jCtTVGRL29diBn3pjgD8soE99saPDMeS1Tk7WPmXcUVod9H",
  "key24": "2vQWYNfvV8YFQzuyX37P9CwgHrgBfJGiY7CFphfNqSdT1Pz2avSHoNU1vCLrvhLvHdLHUwMMuNcVYCojxEUsLLX3",
  "key25": "4aXsNtAkkqhR4hAbTmSKUXMoJzVx1yj9Fd1wLsT6hXEtmDKt7sSqcApGeyRdKLaW71josvHEh5QepjnPKzm5xWdF",
  "key26": "5akSWULJnHnaDbZ8aNL2yQvuMmRaGsRUEN5aZpVZSSH14jLvM8BjCU54GL181jWxmycmDx4yCD2JVvbNArDNTqRg",
  "key27": "4byQU9NBH5sbYBTUJ321EfQCYdyfFyRwWHAgzj7DLNhjGeAKiLzJS2AzbxwFKJZbNmiQ8erX8p7JJkwLkcviA1du",
  "key28": "5uNPB4GWFc7dUABpZ1w2EdZQ31jX5SWXugY7QcBZDJK1FJZj6ZGe7UsuZH7maJfaPCTBjSR157cNmH818jhSJYoA",
  "key29": "5mJ3Zg9Q9ua4tBBzXwFwGjkhb3idQkwLW2BdNZeFNLzwq5r4HKdgP2Qw5D7W7jCjdtUrWtWELiGiZ91c2adKAeiP",
  "key30": "27BN4Jo9c9hWaaeguQQyhmHS7tnxW9kQSLMabPS6vKRooQJDaKjfhd8KTQsv789kPQzSWLcUKcq1mRmm9pNSNHur",
  "key31": "gBiW7w7ikCVAc8YWfnYyEVQNVEGwcnJ9FpxGjREWv7cnLn77UtRpgcdYQ9W4T87oiov9ksMLbFry5UULFmueDNw",
  "key32": "2yPrLVzBNt3qtCeZyi65huQrhmkU5Hfb8ZzxFLXM6PwwmMaU9pz3vtTqDMc7EjQVk2NJZfKRaZRixu2rkkdLd8p8",
  "key33": "2gudHyYannPeR6MpXQZpXDR48YtRZh3G4XP1vMro3DpA7XMS47xnVoRWeg3JEiFCz4fmvEStutnAo5UBY9zwTffY",
  "key34": "4KBLBCs8t7QTvFewvWkA4H23sqBKJgE4Noetre11CZTKt4acAgD4yzG7oX7sxBEFMTVyi6Lwwp3ypLYXiQKw7Spw"
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
