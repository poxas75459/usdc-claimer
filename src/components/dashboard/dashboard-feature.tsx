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
    "5mFt3LemkUo4cFgB8gqnN6JZ98w1fTLDbqPkDJq5YG74TdJaaQLg57TtQH8QRHxkYpGoe1hfmWNRWJKin6EB2di9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46H9ps2TGejtiZciWnNM9WzY1YAEynGREpYda3rbRr9hPn2xNTccPcN2Za5P1amdZXrEZrdyPso9XH3DcA9qnoYj",
  "key1": "2LdFw2uD6LYmsem6ynkF3LghtVSsL5N3wqt1Fw33LgaHb1kFP2Sp2SbaUDLupPsyuLhRde9hKpiG6Xp9GG22Aq29",
  "key2": "2LDgtQv4nHyL9Z36sLA1Waj45tDR4ErtwArZQZxYZa521ajciA7V7PRQBbJAyEDL8vbY5WANowevcQVcLFTYkN3C",
  "key3": "8GggE8Xq2zjgEDn1em8Y6ykxuSeswkeLd66eGoLyeQZzA7ooCerQJFoz3p8ZZwc4Zd1uwGCXvAmysYEqbv1L8pn",
  "key4": "4XapLVG46FyauuerEqikKdxUpqE77ZvkiCyL9h3ZQzu5WMDCBFiZj91HoBMyKdEzEvvrx48oySdxgCUCJwx3r8jh",
  "key5": "3U1a2WZNyjiVWmi4NcABu9FYm8KBKLj1Z2cCp6qVZoPttyqR6VWycnKeQayvAY2Kb92Ru1ruKpbLTSJCTL4UXnX6",
  "key6": "2yVuff9tspWWbWev3GnxWPaBzM1QEqEW9KkVyzVahzNR8DpU4aDXbaMRdXCgEYT4pMeqU5HwmqYiSypJK7Pz7ibT",
  "key7": "2Yz6wndtvqhiD5m82RLykcsxWHd3CtfC5sQLUrdJG5uf3SpXGx7zY4vqLPd1zxytujPme5rAPQiJeA6ibM3udY3T",
  "key8": "5x8vrqDBxQXXszZZtCc6jsZ81iaD56EJttMXVu8QZ7y1wVfYteNDzMRsBddaGvnrpHnUX4MZRv4toL1qKGGiUoEs",
  "key9": "5KmuEgc2px5UFRFocYnShqEawByzEVzasgHwtaJdAeh1UyarqBf8HPCxkLWqLUCAK5Pvo7ZSUwSgAFYbjMj3tqvG",
  "key10": "4aWhh352C9iigSnGkAE2J48Pnp73ZG8W6XFfc51esYwVtEHnHTF8CWsAvWAZjEcoZp9Bm4zQEx8em6Wu8ucSmktU",
  "key11": "2XFCe8Fa3QZM4u8cE1pKVC674NXBVehPmxhCRWmApTqaotHZzECgf7rH8gm8er94kijoC1Gqci66JdFZxm35mkQa",
  "key12": "4bPHXk8T4kSL24jCAJ1vGrqK5V5EvH7BUWvoYKG1mas4BhXRAaarZJGbEe3Dtz6EMwzqPw3yLa2upEtm9AUveSEo",
  "key13": "2Lsaa1m9vH59CyFvWa7215RG3jgHEZxHGt2SAcmujKiHNntz3ReihriPYvzxxwXBT9XWSY44pmSdVDfkFW5NHvdX",
  "key14": "3TFddvKat38n5bhsiPsA3dMsfBHNFgtTZjLFiKktH6QFojKVkuJmQZVj9c36nkoFhjjqwc3bSbTtRnaVfjya8uY1",
  "key15": "45H92fRKBSPxj3h8H3q137dAiADWjJUJvRsJv3ZzmSNQH5oX7DJqhWeFu63q3cFGPQz9xtcFDatWwGv6RVPSBnkY",
  "key16": "4DzwJs85jDS7YskNucVVdb3PZR6AoXfrX5A48R9VCuDwgHHYhhqoLq39LwLGXw47trUBz6u9pUZEe2GZ35ma9khw",
  "key17": "3dhN5AGH1CsASFwTL8HZA89KmFmtnuRmfoQgAR4jC8vgvsJUNGNLHmtcFV8m5A4pj59yejb9iZJ8jmm5Dj8gwQZv",
  "key18": "bg8ZTstNuaMsgoJzLou2J3gadBSp23R7zYsf6rSctzbQaC4AXNMw33oPwbSjfW4pf2kmeAnP4x7ykLEtWndiURj",
  "key19": "4fz9KQ8dzcVGR5syiQH2XDuetNwrZcwBHbmKy8nG39yNzQM6HgpyCVnYzMWNvgNtwQLMxqMtP134Eo5Ja9nfZxWw",
  "key20": "3w2T3Fer54f6KfQj7waSdQBmduSHXUcweFZsvArYUJ1npfKAC1oLjE3U6ePWaKTnsQ59v435VRKisFovYFiYWqcx",
  "key21": "5QGTxtXWLXYFkjNMWEpKkvmThe8pkVtt37xP8vU6LstcZsckB6vt45uZyjTS4F1nKoAeDJQYpVpifJEAwxyZMbbX",
  "key22": "3DxBMXRpJgyw4KoDfDX5Km8iVrGE7b4pzsY4YJmuuc87aMm5VsAmrY5ZnotydJN7KG1KGDZctYoMsH8FsDsTwYHU",
  "key23": "3rSLG7JdSy5x1SQDRw2Wi2URenPwQV87aHh7kto5m2ixWybKo1nyNpnhw7LXkSyKsr7LUda34ZPxkz9BogDYoGe6",
  "key24": "3fCbBv5dtzD8b4cyaM7AqbAcM59jEcVkbDdWwj5VxM8CuBHK56c6xmJaPbA6mnZVtPeuUzwWG6DkombVmM9X1EMc"
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
