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
    "bskJCHRR6jgqZ8UQTbrX417V9TYH9JyWjzaPt76GDWvgULucn2RtSghVEYYSTFGBTUthj8U7xSrJfEYybg3vW36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35rrW2qTSXMY6R5P5XMveRYEy3omd6jyHekhGsCN72ULiEAYpcHcE2EsrCHZfg1tMErhUce1nypgVxyozptoApG9",
  "key1": "jLeVktEj9FN6YXDarRb3Hfo3aoADWSBxBqWLbmVmk8HgkpWicNC8nJAbQg9FND3guy9nrMn2sovuUcPBKo6cgS9",
  "key2": "24NsfMmPVaKb6tTWfBkNNNjaBq6B8rRjtYR5sfEbtVbpiDaj6odLHrbBKCTZKrqJ8BwiKdUeertL49dj6gXumpKF",
  "key3": "2JSagGkgb66sMZ4LmcRVZKrh46duDvrdrK8unVeZRwPrxdTQAn6FBrGhhjFMgxpaz7277YyuEGahHNbm7Kgtfpcv",
  "key4": "4iCbKmv8iGViKsfgTm4HhghFZ3niyjCSC4N886GD4RJx4o7xP1EtD7pCzhYf24MzCC7v8RHnhPcuRn1TJjdbPQGU",
  "key5": "5ooqYN1hZ6hDM7vyVkk4H4gh9ToYSSxxzff89nR9yYa4p6BGENwrPVb29GyvdwmophqwKKTgjCeWQXcZ7TPvM6EH",
  "key6": "5nem458A8EwpopfigcJ6L5RtZ5jjLBJEWvQKwVw1yUb34S3Hv1JDBZ7Er8pMJcQ2DdHYoW37ciLUYoxxcvXkdBNc",
  "key7": "4yAwS5Evpnq23exNPnE4JJ7RnqBj7WoC7S71V64bgLyJDeDszAuk2S4DvcUgJyZ1uqX1UyLBi39wkiGcknCfYjJX",
  "key8": "5xX5yjRWGATPJjQUohzGbxkTUquWu5obPS9PRjqiQUpp1ESYzK1A5Q3trwab9cKKEE3THWwaXibUUKgdfsQE3x5K",
  "key9": "3Lie5c6xJmX5xPY2iUmV4F3Jov57cPPtCK28uwhvNYaXVJ5bVgxEYqsTbpJGogzpeHht4PwJgGAFuQLSDaaWzc4c",
  "key10": "5ebPbo8y5rbQao34YPpTa6tMid784eiZAKrD9B5A26SHWuRiWSqDQm3vG9mFd8aoSuZ3eGqdjq7cQy4DGqF9xqWs",
  "key11": "4ftAUtyhJXAw3d3MvXs8Yma3y4xXSL6eKRKnzGekFx32aZBaFfU69c6rU3aDosBYKZuLHPo3qnCoFHq9hFELi9ku",
  "key12": "4aeFkt621wt8MDUAjsBVANax9arMGRmv7X95zmgcYoyM7FSPuxzpqDioiKcLas21neWCsdCjFDnTbVRutUCYYZ8h",
  "key13": "3vJSyhcWpuhKqyTkarzWwnBE4mjtue4DFrBhLsPovzUVoZNT6sJV5g6GxDMpcC5cJfKqPpX3wZqQRDfT7Dd6GEa7",
  "key14": "ts8WKcbcYwsJAEFhN7zdn6d1vCWKDbzVmuiuj7Bj1zYyEfJeF4yzDS1D6DvSkzLNTSY1tu1RUFZkqiDEyUq5t3U",
  "key15": "53dfapW3sc9raDzzTe5ddJmPBKkBLKHaY4WwzrvwaeVuyjuKfqf7AcgweqaE5hYoMBxBVMu3vRBBFTuTeN9SFtmo",
  "key16": "5KYP8tmZspEDynTYEDV27YJzzuZfkDSLepqPjkbm9sViTyLktHUkvdFAAFebzmUF3ZBEASPt94tTSsQQJwhSWT4x",
  "key17": "54sNizuxN6z29Gh3ExtkKDnfFX9GBtpsuezQaL1PgXrRGcMA8FvFayb11F5Dsy3YK5sX8LR2ZUsarsEeENwSRkN4",
  "key18": "6q51FaL92x45Qz6sUveFnBQ5GcNejPQKxvB7Dgc92BHTJTpQixenMVQgQNBJnCY9tgNurKTV7WNunaGicGUGmvN",
  "key19": "3ybyhg2Pq5RA6huG3Ajk6zCw3EHDYJzwntjkk5m6Gk9DW8BoKkovg6Gx81Y5S9nZGQLzBKuTaWN3Qo4jpvQ59z1s",
  "key20": "41bba4tUFquC1T1jtUjkw1f5qj2J67rEwNdfQ2gZkH1x3FA4pwQjudNY5QJfFNQXMCFTAZnTTUozbsXE8X379KF4",
  "key21": "3jTSrzvkcZY222oYm9kC41Jix1decSEnGkxtMGBYxgrcftvNcDtivtoTyoe52U9Gr5nwPeV7miEsy7pg9bUuf5VX",
  "key22": "5G2e4eG13BWoLQrwqw6EhqmzWwrB5R97n1exWwZrA5dJCSYsceNsSRRppnSowUfFVmm3PCoryoNXNviur61YuPjg",
  "key23": "576xJibThN5bsZtaZbrcPVQ6u6SrL6mxJPEZoYkLyq88kNXV8NKxA11pV7d1naf1rZH1QXeiTpasF1gQtbk2xw6y",
  "key24": "5ga5dTm8kenybK8BN8hdP9ocqoMngA6wRSESFwgpo7pA7VqBr1ebLhqLpdwE9Mx5ZYmwwju1et99D8cp3g4o6tfd",
  "key25": "4Bu9RwpAZcdQLmnf5UWc1GfuSBgDM9WFLtUr9wxgsDnaN9DGsuzrFjeq8bJihXXBNacHrCNCWNVEwoUPwaA5RFi7",
  "key26": "2sW5UK77fWugRyyYMyKo5kh5bQAA4ycX8FXuaSDm1AYGJSyJKYHxpscq4fBBvAgzdmEke4AFUJFBCZpTQcGK3Gw5",
  "key27": "2Vz7T3DsZqyfEKZNdfciLCWki6a3Yw6pR2iso55t7srW3G9eaEnruV6U2azHm6FRPk7fRDx29UZ66JfvTWEx2m62",
  "key28": "3QU898FRahtgWYGKircEswc3ZLcdSAQRpbvDicfgM7eUoKwb9mNPw7MEhLAEuy2Vqt1CDWR17sAWRLNHBWuUJMLw",
  "key29": "4inxoohbytSF6cSB3Q5V2mmCfEcuqv1hzLwCp5jD8yCrjtoV4Tm2XGfLpU4T67nMvwTggKn43g2Tkpvec5gFs1Wx",
  "key30": "3HDZPgjCbgViDCxECtFZGAV64y9qjupzXfxncrZ42Pa7RBJ6wLbevBep6TZwcii31aPEQq3msBVxa7DH2KMnnpoy"
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
