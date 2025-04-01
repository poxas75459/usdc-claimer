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
    "MpxuRaaGJXon3GHJmJbaw3MEg3h39aGYatNuySVdERb8h9euT9H219KH87ajvHYrsFYnK2p2fpcadfav82mVWp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3pSY3MphZFmaZSSwEhrg5FzBi4ikAgx6U8puohV6mqwoqDDNiqUTFAoK2EBaCJMCaiKj2pyJ1KbHdsvPWeYAsD",
  "key1": "Cg3JeDWnar7tgMVp6Jutz34jzfdZWRTrCKUT9hZkDaWCnaAcUpFRYozeFqJfU7GwXdJ4spjFNkkPCLCaWhAYXjp",
  "key2": "X57iwSH78JXb6PBUTtaB8UkzghdqPsUAzC7qPv9tXbnDrPNrEsw8cWRmostJe9kTZTen4mAufFdqwzjq2tCLNNU",
  "key3": "3mVom3iwq6pcS3HVxfkv8Y6Ey8LJe45TVF3Y8mNmEP1yGH8X74va22zpeTC9kahexFWSKptkMgjmxrcnBoQNZcAu",
  "key4": "vKDiGp2wogD8ZDJgVTAsbSmeTRuW4G56HexwwdFDoe1E81TugyQzgavBe58ddedgg4DCVYU1dnK2zChWh5eUYNk",
  "key5": "4n3jzXHUJkgQ99oRMysTzvGJD1t7aqBXQ8eEG8UWSHXAubSGVpXqJdbKym9cFmrHCMPugiqs6EzRd1F8LFiSLKd7",
  "key6": "3LpKjXYHXgqpKXpzVXf7CwfRJaNoJqpabNq1fGvAgKmYUwhUDu7mRdRFNQB8hgYe2pNXPB9ULuHaMEwSVqVVsJfB",
  "key7": "5GnCzT6ti7tUZ273xveif1UGcrvmnpiZCbx615GgSdzMsgrtnPPXCnfdLjKz6VywrQFsjEmdLGDvZBjy2ntMpqxj",
  "key8": "EuzMoJmVNpsHyJLjWvMM1pnqme6vJWjFKtDJX7gTHFJSxTFpHJym5odKTvAJRtH2aXNC8cEhuhVnFPMQW6gcGcg",
  "key9": "4Ua9AXDsUs5KmtKBJagrRSh4GqcNhdyRyqJSWBsfx7HDtMWCFCJLkJSq2zmtextHVawU8CUSnQBj8M6YwyYgJBha",
  "key10": "2ppeKk9HH5dygfWEytSfhQnWy7PCVFosaffHAmHkhahr8yi16YGDjnjSqZzeaeBM7riU93ptNtcnG7wCmsRt3Em6",
  "key11": "39Wb214vuprAMT8Fn7MuMatMjP2jrPKFkSxBS7nrjsmVtg5jEciTBTNw2SEp1FwUaXGzebdHmM9u7QJJYweVgdyG",
  "key12": "4bdWobrxRoYUu6Df2bk1J1SS3B2BEBHw1s4Gax6MsyrPSgFR7uL7sS3jfRoPw1LQAAKFv65zECXjedbeWBQcF13n",
  "key13": "41gidEBGRBM2tVzWCATzqn4Q2W6dU17DKXKvPYft2hTVTWwCrUc2CZW2rj4gmxmXufL1MpVxF5sW6g5noKPE6Wz1",
  "key14": "ye5iYaCcNAymzpFGQg57BHig2uGnAks9n3EdtCfxzcLT8VTyXrf6mvKqraTwXnq4WdXbMLui6EBZc4AToAFMEgy",
  "key15": "3AkYwGiEoFGCTeG4zbUgzUFtkLCFDf3s1MzBQXMixQKiyDQob5xbHjriysYyEuwigukKMs673irMjLyBYhFT47Zh",
  "key16": "2UsrFDbmcoQ9YAuaAP12PZk5tn3SDE1GvSpgz8714vHHM7qSVKzBGKoQk5k4vww51HgrDyBTVL78jmVXGbUg6Vwp",
  "key17": "5Rm95fXc8Zj73SPJ3PSzmUWgtS882i99rrqournHQ1xWT122qZq2oZW7KZSKGUGVMY8HDaLtniRxJ3y1NZrWBJnv",
  "key18": "ud8wwAuTYtjdLxZHeBvaYR2mWHxDFJMbTKYzymKQBz8eStrkDZy5PHgPM7zySkopya17Gnk2qJZP2DQFaD4YCgR",
  "key19": "4f4x4y7cfjQTkcGiX7CudxhrniP5dMhfpiURGHBihQhRXcFB9uTbE9ick8qt11nhK38bEcZF8x8udwZWrMCAtHRG",
  "key20": "272ar9Xv3dVgs9Tui77vTK8WYGGajxwi6cjjAnJipwjbWAFzH85gUpxRjbx8m7CDQDeVQTB685fviCootsbrm2nQ",
  "key21": "5StmMr3EdUV287RZP53bBAjAFPRzgRfUWD9jb15Nw6h9v11aWznbNkQHNSG51NcaDSh6UnTBGAasw9naKiYan9B8",
  "key22": "2RqxpkjLQMtvsptrC3UbBVbtUieTUQGx97br5h8viLsqqXrNvgzBsXYNyFSfPWpA8er3a5aRiGte6Bzzmj3koGzr",
  "key23": "33vve775rA6jiB4evM8CH8LDSNg988PvmgCVBda6aMGCqsBCA6Y4unjzsBiUhSuRivq2XW5NBrbo5NMu6pZmtLxT",
  "key24": "5hebwTsP8mwnR174k5aX5PuFrAvJkTzW51cErqx4mtqBEVd36meuPS1Pim8ZrW7j2Y3pRP4Kb4YCwiPzGLrv7zhZ",
  "key25": "4hQBJyCkwBCc2dzqu7Ta3UTv59WLZ7rth5f7gZj6s6CrNfKTn41puqnzUH6TGYwrVGgCbKMVF4NpBgcnWLp6pchd"
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
