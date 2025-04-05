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
    "5DB7S6qoToAow7L82Hcw99WEze86nmfVh26cjphoVhy6cAmrUyQByjNXYTAiQFo3gpFuvTZ3kqZxEoSxcV5bJHSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ne5uprfB2j3rVJFng2tj3rVNzEKyZHWUyHjfgRtLbDPJD76LMze6jje12G6m193z2qrv1oTiJJBZbkPRiQDDWLK",
  "key1": "2dLyjLc3VTsEj6XpaSzjyn7mUyuR8qaJ2isgZfuMoV6kS1fkXtmovQMfnr4TWaXNr8Zb73eAMW6UZyzdZmQWzDxs",
  "key2": "64VdnTNmi35zfe3EBYpkp9MumQksqKyX4sovtG1Mf4eNJLPm2BUu3vcyr19vw3BjBMi98prTCzpfAT7yGFhc9aBR",
  "key3": "2h9c35ExmoAkDBLNn5GLkB1zHw7UeL57oL7JxiQneyRbBBeTzNXxAcFVRGMsdTSeuGkj75UPTNxTBqwjikwf29DL",
  "key4": "3DCLE4MbDJ3Qot3hmczPy6qHps8bVjdw6vnWxKB2exiYoriz1kbLDEZsgzp84Fk5P29ipDLAjSu7J1coVXJ1s4SE",
  "key5": "28G7R9zpqb69huv4WLdGfSyamGpHDK3WKnhh1hehFGovZVZdP3CaYMqgtT2RDNAZxTqk174DBCWe3Zuuuf27CgT5",
  "key6": "48An5yx6qVtXcADeGX69eoYqaSr1trPwvBgngRGuTbbBv9RiViRoz7vDPaKdKuSToGqXRYMZCvteTLoCfNjCniJB",
  "key7": "4kgQ3aGkM6CZR6wVgBCTjgyTtt8EfZsvaJvMMmKmBvngfd1qXoMJ83rQB3CnYtHAvkhymKVQV1o4X9Ww3pP4wt2D",
  "key8": "5vdjV6MmcqS1hG6wpVeQSSczoFUYGCdcqZJYULzVcpJ2zKCGiXyJwHCtAJ46a8i55d6YyX75eosdLc4wuvcaAbHH",
  "key9": "2aai3ZUo2SFZg2vmv4etuTDFo6sKpWGKqzZUoG45pgzjNWP8PNmUgNiu1xoUPc1yqXgtPPyzZU6a2SVcESuycVoi",
  "key10": "DEN7PB9446vhfTnfkyiusgbEoYjFSEYjZMto8TsQCGa7dKsfG3Xns7tgSirDSds8e32RU7sPvQ66TEJ7YEsX1aE",
  "key11": "4xBDSKG22Vx9Hm4zD3pxdztfsfhZ55fRf6NV521vbrCmbJPWprRWAugdAkiah4UmWmT8QnF9LMftoZJg7DxD7FeL",
  "key12": "5dMGmUxEJiBTo6avdr47n5KLoMH11pkK8MegrBu8F98QQjzoDJV12gcuYtoNHPyrL1wdVZ6aAQqrvWgCrDYMZgG6",
  "key13": "Ygn86qReSpf6WTLaiaKENti58w9wNLG8oTD2aTTHrVT7aPiaMoQWjB1C1qaJAPjaLdRH5pPgqAKcAwgamYp8drC",
  "key14": "3T2DZmYJxonXhc23oqRqEbcPbXb9K8573gzV36qF6Ju3PVDA3p6CUoi4YhYnaBP45JbPMz7so3jZvyHnzKrheDak",
  "key15": "gA2V4WWpqvToafk955mDemqer9zekxkMaNv62ykSnMkA3d7CKGJiDiYwYJUaZuF1HLibmkKpUWrQGjtGSHz1yAY",
  "key16": "CvQ9TwwJqtKE41HneSLCppZ75oKFDAux5Cup9QjvPaNjcQ7xy6FZmRQ8suBpB3SHgUYoZDp6Mn2eGmNemyMfasw",
  "key17": "5fmL5YZwfmmJwhPCUguuq77u4BjatcEtiSjNM5JKzWL77b3qLY9w5EDDtUijZ2csk83pjQfJ8btFBmcL7Bg6QkUs",
  "key18": "J2Eu7A1nyax16K6FNcg7da1PQuhJXnz6PwB1PgPLAUavxixFFEZwZuWCBiDZmm4wWjpDS5xGjHdVvF3K3xWU2fc",
  "key19": "2VrkCcCjPXSYesCtJR2Aa49NDfy1vbuaHKzN54R6LQ1yH3PgtCsDMNnPmQ1E58tXSUiuHLTXaZN4JFhS4XAmJJG9",
  "key20": "3RXHZPDNSe5BXLYdTkHukpSxaqoAfZFm8c8tQRh2C93Edmd5ubQcdJXeFcEshSMkZMBjC5XU8J3TePpoTuHs981z",
  "key21": "Tug9mEMC3vDnmS2x1S4WvB3gMDHTyV3WjJihpgKp16Tru6yG9td47fNPvWBTTQkkawrqEaZ1gkawoHFfNZtF4Tq",
  "key22": "4w7d54ZnXKTqiT8WV2QZP1EjA1NxgkQGvpxmRWVicNWeKu1ejRkwMAgPVPPkvYivB6fTBYUvhsN2ehvXiFHsMmrr",
  "key23": "4NYXTsuNnJ3VRfniUBWMEwuhzAez7S4Lk9jEAMf6HK7U6STdmtot9iDUBsTExnADuWnFa5KyhEW16K4WPxvzgJEH",
  "key24": "2R8Tgpc7NiRW5uTRrYVZxJMNpSWoqRirTXsrLvrHGvJ6iqDJr5i6agepb6PxQBvV2zAmX2bdxc62HBYuKWmFfXGJ",
  "key25": "3Npiew6gjSVQ3TsrEewpwsGZuGdqqMcV3xnU5kXLiUFNjKN6HkyDgRNUNzVFK6JxAejBTbVm2nKr9JLnUBeYhtA4",
  "key26": "26Wtb6YxjCU3Rizf4UNQ4nsA7UL9zW5sVxgUWSvFRZ7hciy7VBq1UVH558BrFficECiMMRRo9kHcCcivoU3bvBPA",
  "key27": "3tCqcurvWWCvZdTpaVLph8EtvsRbkZ1pv1MimWr7WBogMnK3ktJkXkqxCMUmZP1Lub1kfCybWM9Tm2ABRT8N3qc7",
  "key28": "3uefckaZDvs8erqyV4gj38nBNZEcYc3dqFpuszpWntRbi4oQMDvnfTJCViLXdxzhYZredyWatobqvDBykfw6TNr3",
  "key29": "4ATkAYPveiCymZi73hF3Mha1328qd4Bo28svWjRzP3ovZJEF4oWp2GSjqjm4JhUXuhjh9Q8fjrpv7wM9dST18Dm2",
  "key30": "4d5jNfRXahQg3ht6pQXAAcXJGLZmMmSpHLh5cmej74T1258MVdB8jhk9mNo8ohZRuK92pcRNMyP47o26Ys38aWN2",
  "key31": "5QAU3XkeWwHcd4RM8PXBdFxRnLQyMaF1JW4kH5iTX6HWmfFayeCeMbtpGe6m77fVHYwmrXesTxALo8cuX2rpbaJd",
  "key32": "5vMJvUaMybmrg95n2V4JbsPLR3raY5F6Mh3EaZ65h12fP2SKtab8d1hwrT2PTbnqZfNxX2ptXn2q7751fxsf9j6E",
  "key33": "3UJx9YqSvCYpJVScNXSHy852bz4ULuN3yNbbVBpp9xrViTt1xzXukKT5b6wPPqiZVZtuHQHHXAy2Qgm8hBh51k4g",
  "key34": "64DuXDj4qQnfj7rQcCjy14Wkvy9yENGkUViyPhZjzqw1cNKhhueAw6qujdiwTsDausgcYH1FNJL8tBTHPbA5gxPb",
  "key35": "2R3KZAzHisFrfP8W5K8neF7EECJGdfULWwxxmZqGimGFo2cXz9kEcmY1R9m4SVBZrE6S92BEJFRcEPwujJKbduab",
  "key36": "5KTGf9Wx8EmQNY3boAR1UjSb4AcMAvMezfoezRGeJTRAXTjzgtHDLwKLbDmpL7w3rwimeZf4iaNyYbVt8F6p8D7A",
  "key37": "ZhqQ9HFN3Bcm8oioGj8pEyLVtFjEJoEqfoaPn16zxkMWnjnmF6ZmS8HP2fgSV1moS93XNQy1YuSR2Z3EAWF5bLC"
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
