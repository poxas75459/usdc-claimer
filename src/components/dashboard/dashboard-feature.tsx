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
    "o82Tm2dFBsrNrvateNxgGzmQbvcAEVq2ord3SXs1hD6jepYKGXY9KyDR6HTZoSbRHCj6A1eG6zDhqYZFwt851SM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n89ALvMCFApfcmDd5E98oYoiGEpVZQAM2x7DVQeiF6ez51mi8T2cQJQEYiap9srq7L73pwXHKyagox6Yge1FdtN",
  "key1": "g69Mq3RbBcA5uDvkPSBXxQcLuRZqxkQ8qrXxbdW67VzGHYHzFUbVKUpQ59c1WtMVGYWLXEdcKiP6J7Dj3Z9EWES",
  "key2": "2PHVWHWYXtAs42jP1N27Ew1XZ2KBfyoZtDrD7qFCkPgymXkPpn26gHGWQ2j2dZJdcszF2T84R9qFhnweL9wdagas",
  "key3": "3ZT9GnKMPJyNYWbocRnH6mq3Mp2DVti8UfSqa79SVrKAtZxZQiYFRznKQLfZyfZEsmTAVp9HHkTYLFJNnPfM5KLk",
  "key4": "27DynFws2ez4ag6Nen7nU3PFf2reFcoRPmiYwvBpdbux7LAGhpiBHjeEDxN3f1UbnJWDchjm6qBnxUqhs1MgKaRj",
  "key5": "5ukz1tY7k7nV1XuGKHM2JvWJJECcV6cbegit4frFJrxj6wLKwknuKzGiERiy3fA4XpdAWTBtyuGtNbuYfRqX9krV",
  "key6": "zC7YrC3Mo5EdhLNAqWxUSMkYKGShmYjQRcjVX1HE4Vv3pn46nrfkmdtRNm53EuxydY59DVSFTiEC3tGzNBxMM77",
  "key7": "4UzE3tpmpRTur8ERrbH1wfoMP5C7xFNuBAiLXQVqxzPebSFGec2ryKXdh8ttaW5wo7DETdChjoKHetd5jYJTdx7e",
  "key8": "34wdnGS2qHGGETjRA5NDC5CKcRiDQHX3incRBHrwQ9MjCGqZyhCCXhbWGpnUWg9xn9L3MAKLQqBxqU7Y6g3SpP3e",
  "key9": "2iwmvSQhDZvLHVkLCuNYuTMkV4Kiq4dpcHk5Cv8FWN7UTzaGbS8WgWJFEtcvFi5smE9JQ8kUAbn5JbJtMSiZqneY",
  "key10": "35Tsw4PjTKEchSTQpVfQEexDfg7RSzg9hfMPT78xowQQzTZrA2PY4fVd35UYjUS7uCLjdbFEw2MLXexWNcBtbs2N",
  "key11": "22DZJPnhuEQuhe7aYPArqcC3eakK9E4Lb72bnC1aeGguHxHAn2kHyjszXty82dLer12qvwDtBxRWrH5j6d2Bot96",
  "key12": "3JsawimY49SR3J6BHCnTkbiz7bU6QS7RFyxPFJFurvekzdDxuYcYoBF8sFfB7gsgMPtvcVYqmrezbgQKhN5ogBTV",
  "key13": "2Ywp4fAhgjkv7bFrAxUkbSxtNtLJYJVy7Bo3Z5TQPgpFWS6K2FRB2ERjn7HWfg9ZUBXDgzrhLuRjTHpSTUa6c2uL",
  "key14": "MAAeM5okXbNc9Lc7XhAoP58vJNoGwq1jx6Ap2gt8LCAtBRQMK35gVAJqGnq4TLZ6nJyADesE6AKqmH5fbVPfnBS",
  "key15": "545qDnXvqMenV5vxTDRtChZE2ZBb5PuUKT6LLRSTZZDUUpCk5aTy2CPRh5SXiPkV7jSYN7o4WhVkYBPCWt9QpSp4",
  "key16": "5SyzSDM8pYTTdtfiMXfqrQJYocfAEm9sGXG1xiKmmbVGHL9pbxwu1TwKd4e3EAT3DNadFk2ZTorjk7VaqhtBarEJ",
  "key17": "36Q4uVVTkFR5sH9bU1PUbpVo32po54WRZWGc2qvxjaukSnKp2KRWBYeAEYdJTNDsTwJVoTSCkpT1tVJj6sKCLcZc",
  "key18": "Wa9aFGCZ5oDdyXKtLcSzeYPsi5Hzw3uH7sqgSPCC6AejD253VqLoQMZ9aPedJaKFhpCVKX78YFGHTNJXK1m8pJv",
  "key19": "394BhFJD8eCzJz52kiQsr2AxF56368KJQ9QjV13NMcndR2HzXEtFyS5jtHJAiDjnhHoTxeHBZ6uG1rd3gKyhjbux",
  "key20": "45ypxjDevAuAggXpcPHPVqkPTAaXXFu1DpPuCQoAKDbKJh2UqzGDwf1r45hmfZKkwnQ1ZA6ASnPVm1TuEfWg3AZo",
  "key21": "8jRUWVdu2YknPt1ATTbqnoXXMqyJkoFaDi2cheTZjPgNyjLrjTb7jXpUpbaGNjt43YhX1kDjUFNn4yPQnJhAVj1",
  "key22": "1qDN255S1pQ6HpT54VrkajS3B3M1426mVJ7SdocrF1qEVrCeHfAivfyAHhDSGF7SEJjdojht81Wa1HZpozVtHcT",
  "key23": "62QJs7YMoFGY8U9428v9xNPwjR3y7FcKeKKj5V1pivmYYM3SGPk4WjhBycdYD8Kashn8dza4DSXftg2PTG8kWZon",
  "key24": "58xQimPhbGJhTQxoGAMztiS5xbXHdDuojUZYKHvSWmS8TfmzHvCTap7zUtWwWtYZAiUpRtu28eVbx9bwbc71yQfa",
  "key25": "2b9iWXdoJRhNGEcx4xHVpcesWcT4YNyGjqqe9xG4Hamou6LqPMu72LpcjDQDC9JBeG7pS6NeXAX6REgK1uioupd3",
  "key26": "5UGf6StbJXJJRAk3XKsgfZpCTbxmLR5D8JcKUFmYQuYp2SW5QiFDMBV4A1GXfAiEX3BoRzajEzSSf3txuQ9s53DE",
  "key27": "5fL5heXDfGQArepKVAAsyuvBdzHsZyqBYHP5Cd9T9fbfG2L16piSWdqfENBr9jq7XnT982827cFyPnx7nizYtUKA",
  "key28": "HgvCoc2xjn36i9JTg3F8aeG7mfuouRszJsw8c3hYfHSzLxyMRwVUuhXZnSCTQdaixCT5c2XRT4bDgNrk5eGBjsg",
  "key29": "55aEjUZmT3wceb9GctYQ47WNAnwr8veXku25eYmqxvTG9KXgHvtCYWK9on8aENCmrb8cyB17hAVvixy2pf9KTmxv"
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
