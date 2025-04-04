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
    "VAGeLFqUGknR4uBuqnFddWLGcmGkpvehsFUXuj6v6cCu6puHNZyGHSTQ17a8mVEwUfXjHm3kP3ndsVpYZffPwdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431wBQJScV2gvMP9a8dLFWWhrwzdrguToJAY6vRrJz3DnrFG2RatC3S7qxhf6RwBtVLqocFn2VRG9phbXiSv9v2P",
  "key1": "2TR1nrToHVjoePzJUTPFAMe8iKFRGfMEwT4F4AXGsdmttFWuhpAQ5pQsqSA3zY9b8NAdLJN7pSuEDpje4qg65Xbt",
  "key2": "4Muoev8BdRQTUhiJS9DAo2iGGLYS88hXDVxTfBJo6mkJrUTbWT73ehay4mVR3nCJWJLXypgwr5TJdZGRLmLBB2Vg",
  "key3": "5BVp3fduK89xFodTTU8jqwdwTa7JV6VARHh5SaqtkELMDs8hHconNJCfW29LuoriWDnWrsDAriYN2keW92RfGG7z",
  "key4": "268CgZNFp2DKUemnEeLjyVnxnvToUVgRfGfnWxGW3CQecuRBy19PHUkQKDF4mcny1dJdFX3CaB9fcM2Wk5VkEgCt",
  "key5": "2vZavGjdgfx1PcuKq2SSmLpsTm2ME53oj9ZHrG93D29jbV3SLtULheFgAqihY9fJJiNaRKYemYR3C37crBw9KZaa",
  "key6": "332sM9g6T44SkLDNGeYzSWDiFugUztjNV3T91GMZzQuaV81yvCrrU2kGrX7pvDMUcRJTm8bm2q27V4facbocFEfw",
  "key7": "5TGy9uuTqkUh7dwuW3BnDEGSjFvWDaRnrW6GA9G4XBg6UCn7dRzy1yphBJPiB7KB6dkcZzWzKGgev6awPRhGRHvp",
  "key8": "34FxqVKQLuc7hq3Wjdw5heZC8Rn3X1sYBqqGbeBwAjDasBvMD2dCjDCsucoGdyQLjZFUkbHZgtAd85LXJj9imeBq",
  "key9": "J3tUYCJq5Tu3cSNmypHmnLqnd48FnLdwu67LijwZbQpfPkDbsCfhJCiPYqzMfAwuzPzFx1oQtSY8sEEbdWBd4xY",
  "key10": "EVGRATJ9VoDu97XmSiDfuqgFFJ9XMJE9Fhj91MudoVkkm43BwTdV71VHcqqPeGuVCRQJ7uTBmWwp7A4ue9gw7vo",
  "key11": "34XWMFtm5ZYUfgu24ifX3A8gEJB4LKxk6eWRGcfP36xXY74JuYDjxz1mVUXzUhQAG5JYPE8bjrhhS5XVrmLeP7dg",
  "key12": "5TdPg3X77U6vGXjFby9bbpgUcn9AFjtDMx5M5dKoPEURMkcnDmadUo1aJr25CrfH6GpSeAHvEmx3KM2rASHcxrTz",
  "key13": "X9Qm5KYF4m5sKADLY3PMaQ8faVixBGumfvUCFevxRNmwkHq7PUMswhf4eRTb5c7bkW2ZaYFWV6e3ZhrKgW12Cf5",
  "key14": "2X7z9JXwAf8kvDSern19H3bpR6Yyg9fBHfPE9H2enSnzSp2KtrtFYcwhJJYeQAbE22PUBLfoK6Vmka3PoTsX3FjY",
  "key15": "4K1xTazfadL8hdXRehJkPtCXf5PnH37kXeoLww9comFgdR7t7uM31r6sHw8B9Ewg9Yw1MMRDUgMFu8qbgeNC6oe5",
  "key16": "BBKeP9uCNnSHSrjFa2bdULmemRznpJqeGgt6xMQpsbf6N2LQiBz96wAXZuQvWTfNvo8pAYvCREro2FJ6zMECtmc",
  "key17": "9PzKEptEDZb3dBaPUFHv35S9zzHR8Y7naaTR5njvKGVCT4WmLzcXziPA6MPYMeAL63T1t6fcuewTegCFwvBxAhF",
  "key18": "2FEmA1LMqHPE5mg1g7wKq5Pi8J2coTmJz6mjMHDi3DZyANHUXJ3ReWQ53QxzvHGvfkazjbNrtwinGQmzdWPqSwMW",
  "key19": "46gXZ2wa3SdCmzN2aFpE8e3sMExVU38cgXDVpgdMpGPZdqLDrKjWU5mXSJPXpFSvCNMc57SmqpccFKcYBU1xg9nr",
  "key20": "3ZeZi349fgxadsQNox6poABsTQdjNpg2j2Gy458MwHdQykdatHFUzcugrivjGoweuZ8CieEAUpANNzEJUkYHqYgy",
  "key21": "3Q1xm9AVaJiVRc87HRSdC82RY2kDoLKGNLkxYeAuJVQ6DqZfoaMPucDuK8RJVGbK2Q48YoS3gLhcP6toZDtRs7NJ",
  "key22": "27m1xRxuNaLq3TrJK8MsQuN2D9q7KouBTtzbGLknNn5eJAxch9Jfhez3z6YUaeteTJBmY6hRSBZmtJGQk1ubRbid",
  "key23": "2cgFNJjRBMtG593dbyUpv4xXmaMBebRYdrP2Aima83bisJmuhFiWzz4mC978xnYR7PqgvMtfzkVhJGwcNAjqTz6c",
  "key24": "64dXhkbhxsBdm93byHTKghTybnoVGPR9pYLpp9BCDztKG7Atf7swnh68ztq7J97EyvC3TfByTP9n5ofjii5ry55B",
  "key25": "4w2RA8ap4HEwwuLQNku3UX8zhdDm4NPJsYyq34hCNw2n9oF3g7NdedAfmDzJ8JUB6DscC5CPNfq6V8P2BaEwXTxw"
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
