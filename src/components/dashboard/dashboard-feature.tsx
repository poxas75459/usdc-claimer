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
    "41JwtyZiAvuTjMiLY6rZDoc1XamzwkQhuTEFfbyUt5rk4qKBGzeZicDjzF1g12xx4NYxGXFtkfMECQQp692UBarU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L1oo8N3GVAKLVQLSb43xhLP7ndJin8Vw6Yh6fC5H78WCPuJbhpQiKyotFTXcRaog3oYh1Nk3za1Q51gANzXdrjz",
  "key1": "5SnYQLyDGpUJLB2soHCaoT859xShGuCtF3XNThoZqXYCYjtECSRc2Bw2gLSvvz89WmRFvjMYEBdViC9fKthhP5NY",
  "key2": "31jAAYDZZJ53nSukqtkjf3rbX6aZ8me4GE471eEu9voGby1tERdXGU8wNeGCb1NWrfWiHkp2Gz1uAK9Bt11qJBb1",
  "key3": "i4vPjQVrR3i8FgEPJwzrBwEMRS5i1S4TBUpk4v7AxjYJ2r2h3ihbZ2RpdJW6mieQWMSVYaqFU6zVHF2ebEPxQci",
  "key4": "qfqaANTxXBDGgAaSCTnCxvvNAh9zjyFKQ43q5hmcQ6vtbzr5Mx9nZ5c2T6RjjfjCka1EyzjK9i3d4VAmqTG37ba",
  "key5": "4cEqTMtiizEqHHJ3b1x1bHyVjDbpHJBduuYHNxcGEVg4YhGyftQT6znXH7rbNNjr6G2PsBqrwjbC9QLzUNX5uQ8K",
  "key6": "51kkq1squxDmCV9VW3YFbbQg7MLpFg553KdS4kjDRGqjeQsfhrLECpJruh173vjyBfjvZ7vjwSGegZQwEFxawWLZ",
  "key7": "JtUSVefdhhok9DkVy2g6NRHuzMnLwd8AP6JCWoUah6mru6LQjR84rJ92SRZJvKMM5Uix6nQLQr34b9E7gNtY9UJ",
  "key8": "4dp7JPq8gcKP89EnyK9Jrfma73hwFUphD4Et9xyy8S52XrowytYdhBUYFrBmF1rzXm9wV1MWY2ozBnnA8252EPHJ",
  "key9": "4V1mpNSea9aNoRRV18gDymbC8jpm5Y9hLQ9aUzPTJPssmgeR3AtYoRVcYFrvsWjAuxYKTBVfKsEoUVjVGNBY9X91",
  "key10": "5MnghU2DRgpJCFqbKDQHUm19YKszwuN1Qw9de1Vwng8UP2eyBrGfcZJRgX1mteziHB2YGtkQEh22Bw5itnmCch1i",
  "key11": "3rvekfcRaCLqdvbVHW5wA2aXPtr2BbvqcXiFkPguQuysDVuFPbCXZNuY1Z633xnFBNBjBkArj7w71hN9UcEVNafF",
  "key12": "zocTnBhTCzLAPZhiDkagknN7zcUwJMrKRqabajQ6Uvzwd2mvjm6oKiJB27pJ31k9g96M6qf69gpSRLL6LHuwduR",
  "key13": "3QghDDusxzSy2pqrwghWvyCC1xzVQp8P5C557oYPsmpeJgJQtBnvCznamtF5qAJuCnmFczt3bso2tgU7CEGRMS8E",
  "key14": "QL32c8sWRQNR6cBxb1etq3jG6PfRF56vTCWKrcmH4J8Laws7avxpDxhurxR94zwwwmVvVZaqSSZ1ubM5EtGQzM1",
  "key15": "6jpsvz3F8pdcnDjMaVnybLQjV2vucFWMGurNeve6tzSHND5v5kZbcjsWPFi1BWZhFG3oey2wAvpkgkYZFifXM2a",
  "key16": "4ZhvtiTmDHF8yKNjBozSq8iRydzTdRxmgx4bN4VxSvghia5unxaNyhunEsm6WpRaqVVU1kzRZPFRmRXL2PTT4WDY",
  "key17": "3ZjgXj3wKdEsoQ5qUzgzaQbbX32C177RwDuXJWTNRCFEksB1q7KfaLYoBFJMoWzAPDJ5YiP7kLan8JohkF3qqYmP",
  "key18": "5o9Ti2x2hWx1PMUfwTbbHURDuYHmawrEVFbDETEoTRBgptK98w3EGKBzWe7j89WH3EMj1mqRzyYVv4dTjwWEcHZz",
  "key19": "3Qu4FS5xNcxjirrND2Bp6FgDhLZUnNdxFEsBfoRZT9icTrsdR9twFdqbawjPPf5cqDrRKnfhb4VDV4MXy3VuMrNE",
  "key20": "4ememHtCF8S4bhXEqh6cXKwnksYBBX6M97MZ4poAG97kSC3QKb2awirDRBmiH5Sm7kqTHvx89EqXcRDA9b5qYqYZ",
  "key21": "5P2xAwbRgF1BTJjGoST6DNVc8bH8aJmi5puDGH288d2KLnsgq6NYf1jvJPxzBLFPqtuQX1vP62DfrKJuX3h5v2xB",
  "key22": "LupZAQcLSxo1ySeSMPYp72JMuLz8wQqWfFxC6wgU7ZFXHFTraK857W4egAzu8db8JppeYYEwYrzVZo5oGrwLoks",
  "key23": "4hqTiCHZHirwa3kWxBiErywJoPW6jeWM4vQP7FUFeBuXc3hr2VMKyf4GUs9PvVebdoQwfQM8Z1nmTDoS71aam5Y3",
  "key24": "2F6o9oTPDn2dye3KKxWm26cC8KoDvTSsbQ8dpUYPSZZT6DyFoR7ivq8ydr9CNoPfKP1ciwgcU18Jgqo7GGwecmQm",
  "key25": "3Ear8pRk4hbj9CH2hd5AyGxFcuxTcgLzrTEu6jcMXyxiS2sw9JA7VVJgNpyrBK8kBbUrphLQtCxxmgNtLjCKbVCe",
  "key26": "cne5Eofv3ekvw3tWQ2W2qM8AVwthCNYqxDn64oDkVDiybtcqDz8BJTXRyWSroGkGDKkyeKNua6szbSJXkGCjeVd",
  "key27": "4fUzopXwYuHMMgkFzSUAmKuPckFiaQKCiCXxVfmbuLRedyNJNK1JCfbuSQY31pb8UoqC7PRgghnYPGDYfKPd3iL7",
  "key28": "4eNwg9Pjkb5X4UotL9MTg4ghD92qxLMLgyMK9VrXkyb6CyXoih5ujTtX62Bo1dvVqad8MQEC1B8aYjxUmERgbekn",
  "key29": "5nqZC6UoGhSAY5mXvXHhSbzcjg5abJXMtwWjYFMgXU7L9iDJt9NCpC2XS2vJ6NnfKZtfqgQ8nn9Uipbd5fgadYDT",
  "key30": "4XnjXP3TxQVt5Ec9g5AU4urM1BNcLQcbVNj2zmdrbPQh9BySrUKCWsEcQkygZw5Zek7mRbm5uNgfmvhieSnocXaE",
  "key31": "29iRFvLzFMuaVLWMXBgtffFRcWcU7L2DKeFaS2NViPRGZyMroux4FVr6VWybdwXA9TGH21eAScfPsBrnRRTsVrkk"
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
