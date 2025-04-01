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
    "3RwFDEaEf95HLnPtbkS95rbGQu2vNkCzt9D8Rq4z8QZvTzAggQ8MLmb3L659Si5TxqX7nYDX9p4qfg9mjCf2CsPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwNENKV673hmmQfunyXvFL3e4EzQrsymBuuehWoSWpm46TK9vHzTZXCTmCJw7EMTXTBeCPkkDVNTVTSHCpzY8UY",
  "key1": "2y4ueRjnsHAGdME9TSKN8ZrapVWGwYE4r2aT15TCmCNkCLnjddVCQat6J8ZZNqa8WtiBVkcnEwgJvTEMAHqZe4wG",
  "key2": "2hFHYJ9sReLEVJmEdyVWrPhhmycFLMeSteY1pDUyg2hBXui25BcRpvpiXp2Cv8Grx66x8ArstxX67n2KzEUARuTb",
  "key3": "34VzNpvkg4fpiy8jC68zAbEV9MTzamXVWvTuhs3tyuEadeRKjDBtce4qW2ydstEyorF18GC3sLq2hY9kxFk1XxgU",
  "key4": "2pC6LfmBtVVuyQD4xyxbD6S38E8G3WzKVV3N6QoMVB2yLUHV1CWUjHNJwqZkvoAEXXQj5vc6ZspKfq9LqErnJWFs",
  "key5": "hS3YGC48mZWXQL75nhmheAdnmXMzrSYCLSu6whDpRU9WR1nU2jrbfbPxnj6tjUaS7PtHUzfoLn1V1Y7MJdoDuG3",
  "key6": "2RLkQFRpmggR9yKHFTRj1EiCNpKmD5dP374JYm9uepje1ZT6i66ht8zj91fhaw4AkXZm299YMHFdsnUDveL8K2B3",
  "key7": "5V7cAVEpD6fRx3tMyU6FBpMZyrxHwFy96rkuHMmnAAmUeth1KrJqGmNqFxf3Yr8j9Ck518tm9Z4k2iMWcKCVF3cN",
  "key8": "4K2fAJ7eUANnURqAeSTgnwtThRTWDT1GxXEhuK8kK6rwmQY8hiR4C7BUH9LQ9LP7VpwMGAKaVM6UVRZBubadrLF2",
  "key9": "4DsojyUAF1wB2DpYpAeHLL21sHAkba4ejLm9uY7cogjbvH6C9jpXZRFavrFQPWeN8D8Ty2ncYsFfLf9TJosz3fgw",
  "key10": "2pStdK2ZH1FsoMtQET2CXxQpzZ3QemRYTfBip29dSKyS4kQtXF7v5LaVGmWtutrrFxdvDXFFpynhhSMdZhWGV3nW",
  "key11": "z1Rw7oPZJYGZLMWKrBg4wFXg2TVRiFYEiPyVfByb64e1i1QQQxhJwRdeAUo3Vkhr4CzjUWBePBN7NknAQRJxgCD",
  "key12": "3q9r3dzh1BNMD2KpW7bmF8m1ajzp2zWFVMg2E5GbMKgAZb5PUFM9Qq2Xf2g243XdbsnuyKnMtGUSPquZTYbQVgo6",
  "key13": "4xhQCMA7Wu4psWXExq246wtg8PYTADGY28ZQVf3RCChTmTj7JzxMrPJokeF1aiuQEKAhbvy1g1Jfut5tCkSngMyJ",
  "key14": "3Q9NzXLMKZUxDZaqtvaUHYh4GF6FtFJx37E84VJtHvDg1c9pKT8oPLEiP4X6XLiS498RkiQrTy1ChhWh8zswKGn8",
  "key15": "3x1zyCyguoe9ypLcwkHUk8n3Bn2C1j2KKjSeCDt7yoMrGDZvX9DcCViXNH1xQN7vNXeQBNQc58Tc99GQqTApjXw3",
  "key16": "5kaZAM3qk6rXx5GAkmiVpKY18pSpoNi4mNPvBYizKAVzktfDzjCgiehLi4Gza8dmiKZrznX8FgChnjQHvCZfYoZz",
  "key17": "46z3WFxovTeQKC5apS5hNnfsKhQnEA14dwrbehnUFxjcnP8v74B4PmMv3EUzx9oBQ8MtVhNb3sTPTg4kYzH5QDwc",
  "key18": "Z2jKyt8rSaZoburxsRReGX5p5BonXzkQvFnNc8zL1MS4puwRzXkvngxjx1kYXc86sgsPbx7zHTfmUYv5bSR3C9P",
  "key19": "4WgfGLSagLN9ftGbafGsFJ661mJdwM1UPTwn8RBo8cA294Kd9T6XnrQ1fhrseuzw8gLu9em64arZSKanqYaGF7H2",
  "key20": "4ot2kWK8BDUPSjnvKFs9iuC85Ty5euAhcnWTk7GJ7vh8YHChMhEySMzZLAzoCiKYwafytkcaZmRZkEjsCDpYub6E",
  "key21": "4hQ58DPma5xSzH94xELzaPcdUKJUK4vbSWkt4Y35bEt2XLCJtTd7ciHrKMRJgEPi2aFGzHzs7E3vaeXbYkZwbxbp",
  "key22": "5TKswKHWXnQigbxDGadCGr1kgGeeTPnfNKjyzSWsA8GRcUWgbhZrZbtpahp6Vkoh1bYR8H1nGBoyTXcvBPPLAbdk",
  "key23": "5YFUAq2XBESEv55dYTec9fV2ehNW6m6y2TRHnN5GeWk1VMaswYowFpmppxCVBAErnQ4ER5KzishXoTzE6KPQSkqy",
  "key24": "4bhf17S7yKBaVvzGA7f7EZZtbs7rNQCHx9kQAiNfsW3pp35dQNRKFNrKbTUxk63YBSvDwgPEz6NCvYGe5dLxe5XV"
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
