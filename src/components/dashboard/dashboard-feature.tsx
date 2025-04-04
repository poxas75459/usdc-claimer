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
    "5YrosgPw6EpATsiBV5cPRg7nWoyWKbnQxfk8VvLxe4732noT7bzGzE4nvvAiVQJQAbUtvxDcCTNsqjq4vooGPXf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7LEsjctLEyetvHtsjBjEYvtohxDy772YzRRXBRPQ2gjfdJPVpVJnQk33et5yMHnyyfLTD7m5VgsR5dWjGXqBju",
  "key1": "2HDi2nAndCjso3fk9ad9FkjZdwoAXrfqiE6SHRXHbbPtv8nwgnHq2r4khTiPQKvbzaUgJ2mej6DZBHE9ySuTz9Po",
  "key2": "3B14hdEhBq7fdPwyNbRC12fmZyHHFzykPL1dJLgtk6KJDWw28SLVVyPMUTvY6shW1y4SyRyWiNZZLhmK42G2BPf",
  "key3": "3uGA7cZpVPaEqNx8prkAGY5a6AGEDTHxNjhHi17R43WBQLTt2rkmJJDcPygDFr3ovb2wrRKy36cj6FLtTw2vg7ec",
  "key4": "3PrzXR64Em6FbgRa1uEZNaRoXrMFfn8tBoAdGdrXTWZgHny8XfvVNg3yRK82wPrDLQUD4YEPNGkopHJC6DXPyy5n",
  "key5": "3koFDRzS2FU65LnHJRdUVm5k3wfWdadpt9iXTNCp8VEYG3LnznE98px9oSr1CFN3fqp1Ebeiqjb22x4XdiJVkCXd",
  "key6": "65gh8mSr4xmmR5LNCjAQtaVM3wM8LhMbqSahLm7LaooX8Z7Ea2Rz71tzH5WkAXtZx6GD19M1t8qGW3TQeMAsnNUz",
  "key7": "4s5ZFyvWXGF4p83Brrk9K3n66pYEzmLYgv7eqgswMnvkRKwNfR4EBTVtdJXCTevXrSAUgVoEdVcGdKgTcevH98F9",
  "key8": "3AdStkdcJEKEZPEVBScQRHcDkfoNK8hgUQSFxbkbuB8o5u6wurRpK5m29MTEhmZo7SJYDqDHpV5C7KuALi7j2Yyp",
  "key9": "5ixZJYgXNdpsZHqS6ZnwoWbzLWxJEQYWqzacoLch95thUvGfgdCZhPghMvg42EfDwJVkesSS1pYLwv8exRqW32RU",
  "key10": "2CKmyRXEHoJk3GpwumebVexKYoGyCQkHVdg4Xwc3jGwExKLA65YAk1accxt4JEybrrGSw5Bk7AEBHVmDSMbKsGLS",
  "key11": "3hTxM2mwaxAnMr4pcTKPeA3NTL6RCyWhKqEVCH87TbG94W4EUCMso5MqEmvMio2JZ46XMWktVBGq2xRMMtvXMDY5",
  "key12": "2dnFh4skAatptVv5qRTKyAEoJ4UBnrWgfQEGHHAXkhtwBL1wrNopGW9Ld1AoxGXt2VBYkmChxTk3qGH5uRg3QkSf",
  "key13": "4o8cnRjKH7ah3gNSBB3mNgjtKr7naA2dpLShYGUj598mtyuEWeWZqK3MgJpjrWgF71yZypnePMuMNCXFUyWt3QgZ",
  "key14": "4eSNg8WzaHXz4ziJnADnbg84YbxkwgcUZJ91bPyzwmg7YWUxeYQ4oAtA7N9EjTBSU9wTyPWfNCmZdyDPSy5RuFAG",
  "key15": "4h6sW9grLgc9h7N79KoERsa4mTzsMMchST1TQ6QaYekHVPMNLev9iv4CPYPK6pLQSJWezx2mqyRKrdwdg4NPszdF",
  "key16": "56P8jpEpDiBvxDZSE35X2TnMirDvS8fFrr4nU1f5Ng6TEYUoat1w9D3hUKRK6r4Qr5myDwBCy7XP7LtPFpcRrr6b",
  "key17": "4CYoj6GB4v8e9Ltkjbhpp6GXL3AYbgEDzTu9Py5YBeayGMwxgoKtg9p2JNUpAdnRVmF54TvArm3NcAXcs72YKfHe",
  "key18": "52sDuaN9YTk7UtT8fF3BxryAFr5ZZsULUSLtZon2yTRax77fygVSjHMEAdhha1wat2pdqaMAV7VtDP9FGTJiJqti",
  "key19": "36yJBdxYbFp5wtuAdt89U4uW9ofyhqxkk6BKE8thiqovVdiFjsgVqXeg7jvgM8r31A7YRk1xT2wu22VYTKV1cnEW",
  "key20": "3RELU1Aavu3k3smHZ7heWdXYiCmtoPgPrGg8fdg2fo55tLFyWwRDYeoYLwVLyxPBRQnyVsu2u2AFtxZfpjk7Hr9w",
  "key21": "2YraUdDHD4Gebf1B8cFXfH2DSMB4WeBpHjcbAjRi47Rb9oeHV6BPgN4hfyJeoTa8vbhzn1pqaZ6iihgzapqNP34P",
  "key22": "4Zbr5q3zGT2vLF3Bfxe4y8gjXAMETidQ1uHALPAUT8vQVZf1tmHFcpuS8R1uUo2wD4AwiykPNaDtWwHcACfNva9n",
  "key23": "4Pkmdd33Lv6srHrJUqsR57zDxak1gn9cpxgtP7USQFiL6hLpgF5hzBPDvAT9PykRmxTxBgtnq8hX3C8uKZ5N6o8t",
  "key24": "526s1j1HnvfYXNSUJnWo5D93CjBfyik5DUKWmMbHpDZCQJfVXY7gZKmQh6AW1uk8NvpcVVsU9svf2Ah5nd6x9MLt",
  "key25": "2XdroWRnrDqFLwuxKqxRrEdxxemPjs8ppv2iuqKz3sfuiCTR8a9LgBuMvvd8U7NuWLWqsDchmTDqw1wPcGBF6VPY",
  "key26": "4ShMNrMnMUFiydnx93UYyaxdVRgFCsXwDCihAupMtCnyvwp3jqGRhvVbsqRyJoAuGQUswmkhFK9Gt5AhqSqSrUPx",
  "key27": "5n66Y1sy4hpkfGHwiLYz6irPCcHS4ftcVt5usZRbBtrGecLdpPQwg1k7JCizFKhmkjbR8wSzuVJ4Z958Vq4DmC5Z",
  "key28": "21XDix5cCQ9Vobg5Vugg4PhQMUJanWAsp6rF23dD98GaC3Ac7wfA1E4JYfpFtafq2c7tKhWTNpQ75vN88EW6eakE",
  "key29": "5qXtadu9vrRajX8Ew74LgxJt3tApTPFwEpz2vJ95rx3Tktx4exmAj5Rumbgjd1NXfPCSH6xvsmBqfbYPtYNwQHk4",
  "key30": "3Ercfot8dvCdSYhWo8wvh7kCNKdwd4exvy4eRBuBzVjR7eHQ6H37Tmc3vgkGiiELtNSdryk1K59PUs8XVNCnsD2T",
  "key31": "4jqAR99ehwyjiU1MWc279TC9dp1x5LSATpBgfnGJdaT4C8eyGL9b4FNFLzk1He2k7wtvRRXnBEKVAMJpSbmjE9xC"
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
