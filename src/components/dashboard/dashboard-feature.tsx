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
    "SetKg3V1NUaTRPHVbk6HUsAwMsGLrYgTRzs1kFb13QZ1znWxcpyNTcdZz4XwRERVBMavAYCU1dGMMV61vS3drb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kihqcLVMgQJQoFuGJTJZJ3XkMGUuDEcjPqnvdmdyxhhLxBGUZ9HN38TtrfNcjcsA5gcSuKfKsKEotrPJEcSTY5G",
  "key1": "3Qh8PnWudPeCA8yQbUrijY2iDiHQ6GtC8M9i6xbp9RR41zhA9k9YAiPigcxWob9JZYo4t83TTGyBJTad2iRmYfmB",
  "key2": "31g61B2nSUiRGw4ckri2MS21T684nXvHoXne1zMkpjvnrm6K7jFw29zVwxLpp6LW4jzKkpKWfeEDgRfSMAtz1fVm",
  "key3": "fwfNbH9iVFcNpBRen2r1WmNkYmr8sDyycRJk9k8Au3b45txYxvd9269Fub4PBy1DehaAVqPhQeRonN4h757RK1g",
  "key4": "2VEsbx8LhyYynL5UpQScuGmHqbjkB2BjM6dq9DbPK37aXVRKtUcGY7HnPvsCY5kHA8R7rpFbTWky19GNzByyr2DW",
  "key5": "zVHHNu9g1npU3MXoth57C6dfWPmsrTPw7ahs73mgHRTCcUBksXH4RifkaSMaVDLxS7MZ1vRdCoTAeshufiUmLWL",
  "key6": "5MXVsfVx6HjnPGYhJgUAmMy3T7nMQgsr4EKPVgpRA8yRYe6sAMbrR3NzCDdrNhHAqsb29JYcq5tWYhWV6yKEZB6n",
  "key7": "twH5oMzpWDNEcJSQXg2RHiSFP4eajou1DEekrWuGFsyEr4aPHpcmYEGXyGjeopKdKZjEMCBjdZqJjfzi5hNjvvM",
  "key8": "5EVcPoMzZ53k6JySKXeN7Nn2UFq8NxLPh4Si15zaDjFpPYKt351os5skqQpZeZYizKYdWAKJW2X1kz37xdk6WVez",
  "key9": "5N6ytRLvTkcpv5TxX53s41r8LCPQxoaSpho7MKXn8o3GJi2WjuUf2sBQ5Ho8fCXhQWxnGcXBpixL22ELxvi71UTX",
  "key10": "43sAGKYHmqboinnLYXaL7tFcnbtaTwsr23vs2VocJfFbMK9Hk5jiSDoEYwW6X26YNtUXd8xeqMAQ52vcDLeZAbTE",
  "key11": "4cG5Ka1TsReydScZtVrkebf1BRpCm912fts91hMMA3sac2aem1UNhbcTeNmC4jiQPoqbgBacQbBFXKvqzkC9kVsG",
  "key12": "5SmG5x7eDA9TDAPtbkcVLPyP7XmnPjmjo9bAtEydg4LLLvF6Pg5YWCH2HBQcB4QuDiwrEyRJNB1tt5zbAYmSxL6Q",
  "key13": "4hcqGb4VzpZ3Lysgr3ahB55u9jNPuL29sm6ucP7yX148XRsfX29h163kpWdodjsrjyvvkRW8eaoAsFDj6H1rW9eD",
  "key14": "4VGMWbTrDKvseeBARaJ3aVzDB3gF8MsSMKiWJ8FjdkQe4kRTeSBgw6w2BPTVXHPNjo7nCjaqfTWwjtt8hTAXZ1kb",
  "key15": "5NxcmSsH3yEjwWrc6CEgjLxUQLm2NviFoMHvW3vk8aoiTvoxsWVqP3qwj4SGX1ETPgS16zRaLbHfyCgooJxaHfdy",
  "key16": "5wU2eav1LmutRN7n1hE8Z338Q5Ch72fd4a1N45sLw34wp5iu9CHFKERE77h8iPqAFCyvo3gKyUFW1M7t8tKjAp9i",
  "key17": "UY3yQzYX2dp2iZvBnNsGXu271w8gjkoYSuhPAAQnjThn4NjjKLCwEAjZuUu5d5zBf197TgUKry1FKHszk7R9HgJ",
  "key18": "5oAw1Q9Mk2WLUv16DbdMbz73Y8BM4GGpggCk6vJhPaebCJ562JVDBmRcYxdZniYzeAM47xwytcWS9tJZkQPSq8Nc",
  "key19": "3KoaGchpuNV9HUT8t1oCNsxNidhPf5jEu1bW229rCLfvcFAmfboH1rEyb8KnF5dakSB1RSXs42vtqENoZvPMv7ff",
  "key20": "U8v74gn1KXumu9mqQNGZtmqa81yjfxKCWWG6uZFEJoZCCKijGsn5P7FTsfDERgLLKz96qfKHcvkMNQaoPGqFBoM",
  "key21": "RYkwMnmH8pyC2yfGaW3dSYwJKcPZK2pToo6wHsZia6AgCPD1YTuhCfD9fzA23dqoZMGM8WWraJ2tUHWgSYYsVPm",
  "key22": "2uzU8oi9f7dbcXLj8JCtgbMRA7ozhEjmZV8cbfwya3yJNv8RUkXiPqzadSugkj62yGDo8wfPhxspJ1MR2GECJiAk",
  "key23": "54wPwgpWGGRnSB2av6irkjsv4x6CcohV1xv1uVtT1z2nku619fqQ4jymdfbAWGRugyGQpWLNpXZ22ekUcWV6wCxE",
  "key24": "T3txtiPof5HPVYqtkzqh2ySySqqhGBECj9DP5QWJy53YCRCiwCN8JySAehg2YXS1Mvr1statXVqEYfbtcvR68DS",
  "key25": "3V3erCFabRxbkrXKUBt61zhKAWgcMkXhQMB2k59rmtGrXMHBgr8nPrsG2sSMgcaqHVf2ibe45jVX6UjSPkm8DvJ"
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
