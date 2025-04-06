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
    "5TcahRozbmaMkro3pjP7KPLiaRCgETrVehHfKdnXeXh3JerrgnRRTn6yHAzFeZS8FBVt6TVJToaUb9zuBrzUxZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r1kDrTgMQUfLRqvfzbydKLoTuVdqDZ4wzLBXXMsHQUWshiNyDn2BYbZQoRhCH2tJKoLLnjoZckzGuMhrXXapAWv",
  "key1": "2LDDryfoYVPCYvryWWefp4W13PPHqZ6JgWf3u8hd2AKMzHvZ3o4ge7TqqLFx2kK4KnWKEsn8cVBc7BPP7Q4RSPBB",
  "key2": "cZ55xm3kiudnmcisaycm4hhSnRNLhvGuJELcqyiCs5GUH487icH8DvcbrmdUagMda8ZUXUq4KR1xUzXwnC2PGaj",
  "key3": "Htear8B26zvcYiHmQtzHhUE59bQr7JH9VwxezDk7qRvPZaCGHEJqNgAdC62pMGgPixFHpMnGjnf2fsj4ZFy8HM9",
  "key4": "44EfvPuA6NfeYp72pH9AbAR524WSkehBJzJvsEPNBmJCTuCepBFBZUkyXXc5SvfWuAj7kVCPpj3kBTYeHR9pm3YF",
  "key5": "5kUMxKXr1hVJzcqJjmnQ1eiDv3Lnm1S8HAHxQ9BBbjyGHZYY9SYXXqphiY3WrGERA2Ck5CPGhHoqFtFNnTnsQnUH",
  "key6": "4n2CS1iNKMqyZkdAYJhpF5Q2ExcdUQCYstWbugQBrL5eGHYjfugTkr98Qv7GbZZqHRiLHZFwhWiN21JMB92km38q",
  "key7": "3Mdzvoa5f2FGgX8CncGXNdqCAsH638q13w37MqCWX7LLFK5qpDNhq6H3G4ZSkjZUeTcXxA3Ue15tJK2VK49nkaD6",
  "key8": "7uZVhiYq6VGFkgXNCJBGEjVdurTcRMPJ92sbX5TgVsbHaCVsdZn3ychazarirzcMUenScTQ6KPgfkRPsGxL68oj",
  "key9": "33xujuqR2Y6hgkakjsJKxB2edDnm8Ui3v2mt4mpUxPDKsFwpyNwzM6EnKHxTWtf3y6BzgoS4dbWG4RHwQ8Rn5NkB",
  "key10": "5UytiRhyM4gNdHcpTaKA8nC7MDjw5UL3so3JfXwhSZLXkCRXXoDdrMJoQeQ4uKkievgcviLELRSZMuB3GE8rNGM1",
  "key11": "2fCijR1XiPVixu95igydxKNLFwj9LXxWivyLaGRQ2DJN36FPLfnMSMB9WTH6LCdzX9KxdgqyzGCVb64TwYVyCJcQ",
  "key12": "4KYbcG2HUYE4uDMpiMYSNFad9SsfuhrPdTtoBkaLzsE27f4EzBYuCf7rsJAPQUB2MhZLtmrfaxBhHdJcwcooif6c",
  "key13": "4SGAYYs3H7ttjx7pxVPAsWFStrGkTXgcAm41DF5me5CwYVMSaBR22fGkC9VwQznvLecSfGjiTVpJrsYLWvrUJKiE",
  "key14": "2ixv18tMQZch4PW2PifoCQQCvaRhDXDaUatRHaLXF2XcHoqZ2aGu1a56JsDVBkf9vuiZ1YM69W5WcqijkoPzgC8U",
  "key15": "414cpCucgEqqtecRhU7FQ5fqpd2TX5CNxSMzAK7eR86BVSmx1YcCQ844Uvj3PLswWwbEy5QQ424i3K1TQkUDLEWt",
  "key16": "3QABuBPzh7J935WAS26vs4J2wUsLD2ZRfB5XVwkQZ6dvkaJS263WAbBmhdiHus7gd7WeyTwjtipwGi6rdrYWGn17",
  "key17": "3jZQULUyDQnaKgmwxCFA1ubkbixEP6XZwmfM3jSchwGEqsJTGsiPBXkUaSb7DM6JDheJgnQobqLtSBFP9wrJe2TM",
  "key18": "2RJbkNCgSe5XW9EE9S19GfxjkiSf4Z3e5ZTdWTPsU1xv2rpdx58rzTzcLwupsERkCVtSuAwkBmuAVz66zCoWVFxE",
  "key19": "5reUMmLGwV3Hcuy92wA1DeZKky9EEF5Q94um6R8CBeG2PsgrHVu7yFFqEG9F4hB4TTedn9WvZKW1rqgZ9ZeMguje",
  "key20": "4sdsMdcLExMKvGshZp27Dc1mTFcpi4wT5khysu299mafv2NYsu8G1MA5mufcny7fUHE3pATK85CBdAKPCCsaR1Pq",
  "key21": "2w3n7ZeiafqQwaBNVsv1RjWyyZiRWVHdXC1yzf8HWK2qUUpKXFkFGsFaGab1duHSsdZAPGbG3jUwctJ7zK77yhqC",
  "key22": "3wQHVKhThiuBMaCiXDHb9GaxjLYh8pr5Tw8C1TsDPXRApcrB6f917W7riozsSHDCDfMhJtQu4etUd53a1C37wEaf",
  "key23": "8e6g8bCH2kjPeFd1zncpYYJb9PJLuVXDFYXWTERdheSvx8Y57T446UAGxuguxT8t1EvrHfc3gAFppAKCjVqMK7H",
  "key24": "3b4CNuCSNpDeg2n5YDYAMhhpncVdrV1G6viAdRoTApScxY5U2cKgjMJvMk3b4x9ukfYFhFq3ucym5q8CDVZKGcCD",
  "key25": "4tu4JSQ5EuKBk6GYvkqCFQZv3zqAGhr7taGQhK5eLo5SucusnLvRDwCmD4ZTXrF1SHPAwajwzcxsmjVrPvbZYEc3",
  "key26": "4nmhYC1DCHvsVHY5u7iCUZtjnshMw5H3wZZkRc1RffM43X7ZLmSCswJrCaLn7Sa5gR6PFL2y9CeNKmfBy8E2S3oD",
  "key27": "3WmaoWo3mvaKnHPXfvVLr53fxdjWYWc7zW8yJ7VJnSqNakvpLt4XJrkUJP61pS6UoY3XGPn7rm8ZFi422CxTX8Uy"
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
