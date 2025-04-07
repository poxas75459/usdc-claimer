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
    "2CNTjbobXXZiLoNZeFdJpbm1o2iCFfidWd89veKw5EuqJA66vyNbjRu1pFXKW1VM2mimB2XUqpPsAsb6mvLZDJEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CEAYv7ZwK22YxYGfZxWFYQu8NkqgMQNvU7YCPJpDStC1r5dCGgzKkTDqQDLxgcH24hmxLZPK8ZeaiCU8JXKtV7M",
  "key1": "594bAMjvgTtTcKSEUeS1qRJydd34AxwxD46uVLa3A5pXEnhcjDt5vLukr172J4pmCDKeY9ArnHUPH946eg69hNKj",
  "key2": "29FcLrUVwLjyZaNjVFywpry1JMwC29NnisGQedxGNrc2Boqsmkiy5NVZ8cFhX44DnVjngRRkNErnPHocYKFojyaL",
  "key3": "2vyD8mbmuZpR1SxHuBDDvePy2apicBTqU7K3bsZ7zdkFNA8nLyjdxBvyeUvUp8qCXjYkMB25jsypZoXKHsmx2Jwh",
  "key4": "2hjT9jokMwF1KZQiPvMr4r2SkaECjXVx6TNW6Q3w2SGCrZJFTfQ4SAg85mHzBRNbWZvY5XixXr3mBZETKfuVdiAT",
  "key5": "4WtqM6QVrsH6yUZuvVEcVSwLgsbUc4EisFbxMydnhbE4Wz1hVmdXybgjpUhizx3BSW6chgpYwadjaAVxB5v5iZda",
  "key6": "575J38XCKsh5m7qZXLK1nLn83UsPS9SgDvvQymkmuhz7P9RCUZZodCykMieN1QaLdte9m3Y9KJvjKmN8Ze4tWgBG",
  "key7": "4NFm2hSpGua2aBhr1G2pj28aH6EvAETB5rsQ5RWvnANauxUpaW6MtRGLdo7EUBGQao2wfgF2jFEPF1ULTQms4bd4",
  "key8": "2afdZtriwQMUTFohzustikppGkj3ftGz8Y12HDPs1p5S15ApeMAZrD7nJXcZgFUzY8ZmdunM1YcQwCYKyZfiWpwv",
  "key9": "5K8tDqt97bqTHKBMWojLcGRoPh6qR9TYcbioKoQ9w5iD7by5y5g5bdtLnj9qwwBaXUgHq14WujQ98rbMGaAm6qFK",
  "key10": "Etc1tFg9r7YGid5aVUdC9QYwaDHX3eijpBw77HbciZfaVZAfZDtA77qhvU4uf22DWvnUNnThYzVnxepsoxovWbR",
  "key11": "3z9nRwZxPPHukrGm7T1jdeKwd8evMoCrZzenqY3SvcX6fG4NagmeWpGzYjUzEygntFqJfeaEcKcNVdCamhNvQ6Q3",
  "key12": "4xRFwu8NR4BtDNZvsFefBntH6Uahgt4KWLgbm4C7jFA4ugE4cL4CmZtrYSgbPYKK11dw2rtq7QqtyBsRfyTRacwQ",
  "key13": "NsEiKgNbWEaWsKkSuetcWjoyUZKSuzBS1wUmJM5LFcjdazqvFDLseGJk9uZDCpYXW1vxhB8fTCC6zJPyatkSjua",
  "key14": "63tNmZbmvK8ktHLvooVzkrQ5gtUFutU27h1jKRTwgBKRhU2a7xZS4eTxL9X2NEUNENR7qywGoUEULHufmnRkDxaQ",
  "key15": "3M5Twku5yVAKm56qa2GcVtro1DzzzRFzCXhi7YGg51CZsM8V8ijdEh6k7YSZzunyV826oT5Geby88eHdoQRNSe9v",
  "key16": "2c1pDRTz2mv4FA7YAqvHB6jK7mLadSCzVyAifoj1uHonrFaVbdTTF9nBn59X4dbuvtqkC2FEMW57jHzFGELAw4sQ",
  "key17": "v99cxoe2ejbuRK2QfaLxguwApgWjwwHmeB2Dtv8VWZPAY3i2rbc6FuzSF1An7SHeLf5EBLtyxc3XaGHcR9uC2Qh",
  "key18": "RzTUYrd9d1n5BJN6BMz3GS19hhaTAYXqG4YwGFopte3PHK8y85G6LsFtkZUZKpRZouXA1qAHPDjBVwxAUo8CxmD",
  "key19": "3Crzp88ro8T2CjYu4eKCASANVJLDX9LNKT3Q3tUp79cBYohqp9cpzXYPoWw65EjRLKB4p2Jf8WBjerdnepSVji98",
  "key20": "3ZdDXNqJwyfbw9LACNiNQqGbxF85JN53wanjNMYXZTjmFkKmoXRErZHRY8BQSAVUnDWG17voJkixE7FqrnwGSaEE",
  "key21": "2LWeRjwwewCHfj7d6QbHPMgKLZQCyXHW89hh3nmcekMHNFbjQBH6T2v1VJ8w8xh2rB7q2cQAVgeQaYq4MsuormvX",
  "key22": "beZXoQXFrHS1yAgaLsyST8qiXE393bRujrrvJNSaNXuVFezYibYHiLDhrVXS6ku9acTUp1H3QXSZkedS3gaK1RL",
  "key23": "4vgkuQmRwxB3ZQdDUbzntbxJ29gH5q43pTtBCahZkmyKKzesfJc4joP17gqgjLjCdPdDMpQ84Gd3TJHzr5cnye8u",
  "key24": "4ykscf2k46uhBmBs2UQvWgoFUkCcj8DeD6SYnCqL7W5cnHWaPHqskPCQEz7NwSC138PMcVLhZN6R2QBgzrVk3pYn",
  "key25": "3xv6h8cuCg9nmN1GLjewrArrredzCbfxqNRMRbps67VLEPyuz6F1JtCru1ktm6FxHov3t3jg6JpamkdTC5gwPQ19",
  "key26": "4JgTYV62UMckmpvroNGSZy521V6DBS3CM4ytVxb9mmVXppLmsdyTs8mgHevkDeSaWG3BNacSsGZF8UhSd6HNN8fJ",
  "key27": "381X32y6SbF5SZxRFu6WeyF8DpGkdvLmRacaHDuV1oLL63wKvZ6nCdmvdhHaMf5ZenJFHNmkQ3qTitgdzXM3TW2M",
  "key28": "5riBANk1p5a4b5zhFYJow4Y5UgA3CcrZQtRJA7CAapAjcsWLjAJPXHL1rbYjBqGDMLJQtiSnaUtn8d3ms6yhArif",
  "key29": "4PT2YVso1A9qMJ8fU3uBAZbxB7Hid8eh1hkUWBoLrX1R3XzXxhHuC362nLAYY9dwCL7qGtoyWDSTQMjfWLvpdJCi",
  "key30": "2WmE1QWtrgagK4cGV6DwH9Y6ZwCoGvvdB77YiYk4UZftBsT28Lxa6c9veWdV8cSCN85GLDgHwVXqHgVryUm3rXjA"
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
