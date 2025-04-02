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
    "3pjBoZcd7o45n6amz7owhavrfkTkXZwuPw6YDRBNrq6VpSDvjGDugkvN455cT6EK74VwD4VkEGz2zpw5jEQod4Wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gKumNxLNufetKf5hWB3NxUktzWxcQVRUrcs2wXjNTjNgbApNriNCadQjRJuT1TqDGbeibcfBYuCRsSh51v4Lp5p",
  "key1": "3bi3LN546FTRt5pUM6aaxWxvuurTzWsRJLRCNQqTmA2fVvqpgfdzwaFf588Xiq8vAU4YfnZ4PBZpLWVUX9vQ737p",
  "key2": "5NpymvxkhQQQRi4kTbmuHMhXUV5e3KsYkJzVhY4yLi5bFx6xhLZ5jyZC4WxdHFmGGMbZhkizMvq9e4UdLg1By8k6",
  "key3": "5Y2rhNuoANT8cj4okazbhGnFmD6kKcjhaxKdqmfPnddMdMNMTJizL3GffVXwaPrYYHuGf41DJsaGygJCCZznX4KV",
  "key4": "5apMcg4kp7ibvPCSCwYLx4aDWbTvXz7fuPG43xtFJccuUjk42DRuWyWnwGie1rtbg19Ag6MyLA94M3vkWqAmAYyi",
  "key5": "5oaX9y3wv7sezbkYZfMrtxfhRFawn2a6yKmsem6gHPtyMiYMtx7s1AvFR5sMoLwTytqC181TyBEZ2og5jsWcWv39",
  "key6": "5CHp6hAxbTNgnxrheBM8o9pixeX6aqKHpK9sM2MrJkGXarkLW6Jg788LxjFx58NUx8tcARzqAM5FBFm6gWA66oAT",
  "key7": "26KLUkzUvWysgRDqZLuesztE352gmvMKrDWeW1iDE12zKonnUWVjf1MCWKcvK7bf5XgN7ADvWenoX1RzHDpJT6TJ",
  "key8": "36emYMYbxP6qDEdvfk7C67mYRLcTbkcudtKVu2rVAL1Mrx4miUrZsix8RuMLK2ujNQf9qyE8cAKJR1wEXo8GLbP6",
  "key9": "27fXitbTmfGAKoYHqhCEMsyT34aoTdFKgV9DHWaxPzPfisB4yPTVHgjW2bs1Kw8n93mdBApAn3ELDs6AAxMKGMWu",
  "key10": "3D9K3t5ej7eK8NGEnjAfLR8CdUYnqjmWtxm3AGgQxrDiPNoH1Psq3J6gCYCAcKHN66t3EAeZNcvH1L6ZU68Ha2pm",
  "key11": "mm7Bq38PPWrveBboNVMXJmZUa58ZwmFPZyUkK5ayDd4nfoYsNxwed5Set1AbiUfdms9Bap17r3kHdXnWsZo2Bdt",
  "key12": "2tz9NqhdtnNDqcmEFHMAi5xMfQUiq2MA1dtUVppGraSnXkDybnX3d4iAejJh4ZevMa55LicjiJiHfDUTEvt415zb",
  "key13": "FwXL1uVb9Ly2XcWUxsBwGBcZV4R61H7PHN2wjt7P83zRQhzpbTEUZtFuVJgvkcSdvmfoDFfjPpy19UQBCk3gF1F",
  "key14": "NSMXbPXvnMJXgiMA9SyBjvGjgWKcXTFkgJ6vSkMkhjf89VdNRbGB9p2cZMo291ZZb12nW7s3eLAX2BsbfDg9RZu",
  "key15": "5caBxjBajpejS7FhftsWsHmPh4Ne1Q83CmBsqhDvPeKSQPzzV5h5K4Dh5FUwWiCfDXWDd4peR8dvFBGRef5rGoRH",
  "key16": "4KpgaQoD52QHDVQQAPv5Q91Ak9DV8CUvrr5BEr3rLKTpXMDgXnRjEjthbd4js7At3wkusnbAeY3cKggYcSeG9hKX",
  "key17": "TKEz3L6GcRZR4BEvy3npZVfPagRKpjeLjKkxVdCnD2cfxe76G79bHKndBp9iakWNm9hxUtbVYX55LsXBU1uHKCS",
  "key18": "2SAWCGrhuzZPVktGEcs6Yi9bnQG1S1EGArePXhH8QfrFJMHwrS6Vu6fXKtCBRcgQuyj4YTgs71zFKcGU1MJgdh3T",
  "key19": "fccLjUQcrDjCeXhWJZAiEbjrMUDswptRRcy52ZiDbfCRkZ5adz6MwMuJZVuthyTDcQF17jvPYqpFjjdvzB7GTaP",
  "key20": "5HK9HQLRWJoV1JjcyZG7XoVQbyGmEyMqWcujJmxxd5AG8oYd2tNN1KCPzBpYFcvEMqesVr1nfX3uhgPJVBxwjDc2",
  "key21": "42huBqE3RCS75HszTcwe5XZVB5WKwnDz1HF4HYqk4a3TBRKyz9CqKUgTwiPE15nx5f4dFicoKE5JWvQTHciBEpSx",
  "key22": "2n7C4VnozRuoZ9AgJ5WVJJqBUpfBhjoE81ZnARfvPrcHcQzE1FMMgtWLw8tiTdKytCstvSwu4dprjTP6UkVSQMfS",
  "key23": "2KZHgTNmUepRMDPCwR1ccmwrLKLaPChEXjfWDKExTBbW3reyLRsCcceGvBB59fRyojjSKh11dPtaK16BLtRQMXCt",
  "key24": "3emu2oHeE5wXTP5nL2inAYaVfgJ5aFBiDheenRoMvrVaXiAqoncheNxQ43S64DMdTVg6CuNVKdkiD86rePt9N8w5",
  "key25": "2WBb1Cc36wZq4kMKCNrxm8G5QfJGQHpZRdsA1RW9uWrm95XnnC3gNhNkibKcNMLR6jG7XNgifwrHB2rWVCf4SPQ6",
  "key26": "51avWkwVv1amnPZG9zULkfFBHDAZcTP7oDSbGkb6RfrLqwCrKZon6uuMnx1wwVvFg77ee8qhvC32Z8xTSSCBaaBv",
  "key27": "4jLMVVGsenoARe1K3r45zHewAvT8kNJtrmHu1G3EhKkj8fBTHxr3qbMa8x72cU1syaZ5TU4mCRUukTs5d3Pqt9PU"
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
