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
    "3iLLhpBxPD1HUFe5kJU4xFcVrVmvs7tRFZRKUnZ31Dpj81d5QuwBEvEMzRa7TMsibEHCc9qgZ1HTxoaAEL1UJ7fW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TiqwhCHAS5gbd8HPRJB3Cs3KEaF4tg92XYQMokrkDpnceJF4qFsfXDZz4CHF8dWMmapQsNnzEPUKY8HUzREiRNM",
  "key1": "2oM4m7dEvybSwZ1L2jqKU4RUHqDyt6ei2A1YV7QUiZFKe8QQzQDYuACSKBVoPYBbQBrqLyNFsSKsquBBsQDUjSbj",
  "key2": "7iEyyw7ocWdQf6QFpjG8sXNiWtBZPu1EoaLTEMCRkRxKxyakE99dULqL9KU5rgzE4EohA6nkAJfJtLMiZ1isQRu",
  "key3": "2DCJWREq6Gn7hdoEhUfr5Kmyp3uNns12di1mgT12PKf1SoinhmKBsyYzmFLeoWfEUVhbWqBw73KmVk17kV8sBBMD",
  "key4": "3M4Gep9Rp63N9Hy9ut6rPNb9nyx49FC8NivBio6KNsk7tHgLDDwxp9EDf8hQawx2TRjDc31QBt8jX3UDuzCtzH6a",
  "key5": "EyhqjFmZ5qgWEoYPFPKhJrHxcqepgaKnBQ3NZ6eM7xtqdkzWDKUzZU6QTExWrQNg59cMMNMakWtyLaPphfbDLgK",
  "key6": "2NW8eaUGGYcb9N5FkvKAyBk9HNbo4Mht8jzv9aoNuVqiLCvPT7K8dR4A4pDmQqkqYPJsxzvdFs2SHiPjAPxGrLo5",
  "key7": "3agVw2VD46Zn8V4yqumHWe98jayVug1TVC9em4qEDm4e8g189XnYmsD1AwbMcJbsFotKfNG6jLMcLtvp7mqpiApM",
  "key8": "35kDWjFptGv1ppoT3TBnKG8vqDcvFrsbGGd1AEK6PCq9urt2x4HxzX7yPR1A5BheDqKttA6e8MjAL5SWotephYfD",
  "key9": "3QTY2cWNWvf8ZUhosz9ArTZwY1uTFjtSFek2YittesMvQYRYKLVXhj3zU94QaXU9DkNBik8GiQnY7n8vQZo2Vyx",
  "key10": "5HV3CnGyewhScGd14NjGN7ZiJm4UVAKW59NDePyLvXTiPAo6VHdstTmK1kWy93c4MsNbt2nBXKQdV2h9y37qH3pE",
  "key11": "2Ae4SdFSVWDZgBtUaM3bENwRftQgBKeWZkkfW33uKaMrXDqBBe4zr6SeT6ZmoE9aY2Jv1TmZ5JrVtUy2NT5amgB4",
  "key12": "5UpdWP9riSCd4nVDJe26ovLTP1Vo7PDx1nSaorei3ZHR8338jVhdotRA2arDzjEYCGnMfXBCRwhMYBeems9HrAve",
  "key13": "4eXkCCvZJ4ZfzyaoyNkMUMEpweCP5PpJh6JmeqE8md3JQSFEdn8fWnWdaQQbonqxQuUzRs1eoM8bfz2q24XELbXS",
  "key14": "2RJKaWgXzgdYtmXUsy6NkUqC3tvFpmM7J91uJerVc3ubc1LEHhT8pXuhA4tqnhUkuhPKPSguaHsfAqvNaQJbJZT",
  "key15": "67nZbeK6VQ2QkqXUkGTDcMzrbmZ2mZuGSWoreRJkaDckzFBBiGvDEd16RcYzvVjoFewwjojGxEYL49BzJBZEZFaZ",
  "key16": "5QhrFcbwieShCCwXr2s4yH8nSjuoABct7ikowVF97dc4tvfF3rZPm9G9LwSajKoYnxHCHjbgxu7by75TwpcYBXA5",
  "key17": "475N7yaaW77odeGtdcdxWDSSatosp4HQQpgDKutGEX3jAKL3XUet7cYfmaXPFAA7xForrdC6Cg4beGqJFaSp2RBK",
  "key18": "RyNpmFNQ9QmWYMhDCgWq6QRQrvRP7xqup7RSbskW8CidWaVDL2UK7bnYghfsv46eHwvaJHNmguoTB9cAg828zrE",
  "key19": "5zdC25SssShzEkf6B8Hjr7Hvqg6NgECRevwc7FhdyhqSJcYF4XwJR9y2L6Vz32jgLEUn4JKopuRceEDjMzofapw6",
  "key20": "3gyoAb4ijLPs2xcqDFSAsJ2TpsV15ccy5iedXfKnqjLnwYAhNQvto9XqkK48GwUShh635EgiAVhpB2cWECskX76U",
  "key21": "2pYj74KDVRaLy5h8oW9uiSLy8w2GBxkwaaTiAbNPGPYjxAThR25zv558WjrPNDXTkWEtox7AXTVUefzbFTEWgVHz",
  "key22": "2mhJoxg5PoUyNpjCmXGxqggVLoosKLPeKzUQZBys3r98QrJSjKmauPMsPnk3RboKzvnYLRZzrCUxaL3pqxVm1XvT",
  "key23": "2wRiiSDoPbZ2QunuY1ENCSMAG1fY44YWGwyrFGA6tMTF622CMqvYbKtuUqwiYX9YxmqqyoAsxVsJpPjDPffLbKJt",
  "key24": "SogFnrdruL9tqWfTfCrDpkxLCmTcUG1iSc1zjeJRKAiSF3NEz58Yyze5XVMKreRCHLuYMwTsmdtusmEC4smCWLJ",
  "key25": "2iuiP2qcC1gJQSxivKjB7cCxuKa8XGakTkqad2rUhoRc2DTZScxqNmM55tXratUnLw4G4te9ENHX8pAV2b9aFo3N",
  "key26": "4ZZXri5CLxdCneUUENaABRQsUmvhAP1ThzARGpW19jGweyF8J571GTXbDnWTcg6PP1T665wKjSVkwKjDzDnSf5gV",
  "key27": "9Rg85T55JZvTKntjceSEHWQeywAfnDeyqaFpttS6j6wB2U1FzL6mFwh7sRLFqC4kwBiPhdq1awfBSuK2uH6hhdW",
  "key28": "2eCDi6mR6oaaNApRcHet4wXbym38Z2G9KuatqdcEPcbfYCHWUYz8AoXN1HAQ1YPPBzn32eXxMtMQr91yESbFopUg",
  "key29": "3wmYzFgAwqmpiq11U2zaRgTZJVLNURFHaKc7sf82UwfMUYpyBjTPZM479NYLQSakC76A1eNBxPJY3SWme2841Vnw",
  "key30": "i225cegqafcYny62T8cV5u9VBTGtbhoNDZxrWn9ShNzCmUYscjQaz7oqsqdty7MuUL1H9iRQ3GyfdT82fAXr9Da",
  "key31": "2t9GyiTv4figRHqztt5CSGhuoJouV4rZj9Dw9JPCFyhM5h6uTJDFbTWkZ39RWDN3noqY83TW2KStxgbtWoX61YWX"
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
