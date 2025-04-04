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
    "6zWwWQgPxh8yPcRbJeVkGp66EetDhi2TWKC8dnoS9E7f4vpKPZePMxqX3KJPWnmXWe7Afn1qcw8hrmpSVV6pqYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562ufvpwqGtSUBHZGuwgbyNo9HB2EQLCAAEZFqXjUxFeAjzg622EyLNWAuhLwDpstZzwzKM4hGR9PCB1ejzLUkd",
  "key1": "4AbhZor3U5XWwCMW4UWxwk18mLWjX9Nh76uQUJ6eMMrRJ6fNxpMkKGm7fKBth9nFD5GcziK7r563E1U4mTQw3w4u",
  "key2": "3AS2jchvh1i7Qy6n7SWsoLuXQhhWi8UDa4VnvCdMQdqfBbHvb3MmmthuXnc6zc5PY4rSuW2vJT9wzPoBj2SLsJsy",
  "key3": "3TMBkWpEgnQ4ahDivNZKSa4mqUqFvGJDSePPoyfrZUud4o6yKphoUwspPssDi8KK7LC2a63s8syEcAfXoPJmo3mo",
  "key4": "31hJPUdqJbGHfMBtQ8RjVYGsev8Ft5bdfEcZH6khwdcV4twceN997KsSw1XMckbjJ4WJ75jUP358JSwAPn9B3ABT",
  "key5": "3Vdc9Rpw6huNYddGaKkpDdJtdXZMzMy9boxWbea7vWzxwpPFe11mXLBybuM1BiEU3zBPPAqsfx8zwh3UV8eYL2j6",
  "key6": "QG7n12FpcwXjtXvT7bxtyQZCzUKWyj6L8FXbSq4UTCJtAKt84ZL6aJyLGZ4n9eTzhbAUGv7sCkDVfXcERWde9Ks",
  "key7": "4mdpnEBka4AzP3B3phksdkqSp4XTC2hXs7JztiQFoS5gctgYYQTQh7Rf2XYeLpmUFqnbpkDdUxysYCM3xkmSJUaW",
  "key8": "FuygC9p5RJRmZb1CGZCqpw8qkqvnFUtmuB5TnjARcLmLhVSHomnmaM4YVeagJGP8vncg5XKixx9bKD1hWspDCdQ",
  "key9": "4Ghwxgpd6rAau8yGi37vLKmbXtxnnvUr1dpFX4y35zyXbMLuP52E9Vg3YB8J47p5wUfR9MseEDWdc5rgSajq9JQY",
  "key10": "5SSWQGHK46M9MmJeMTv1mq8h8111NvWBdvy66jqtLa6tvVCeKFU1oBXQkz8FeAP62arEXnr7CyjK5LkSEqWQgysN",
  "key11": "4oh8fEDzoVJDrxtT6A1SoH2sdkK14VAbseSGtKagNLdMKHMRptmarL5tNn514TEaL9RP4ds95QxRZf6JMQBbisFe",
  "key12": "4K8pyM4Qpa6LhbaobBYWSM7GSu1yXnVb9fytfYd8wnvrqQ8g3ADtKjnt81djx4hRZrsET23vtYYpUYchs4xUbFQo",
  "key13": "4dxth2nxMsPPjGkFeT7W7RJeJb5guTWLuFsBeQN8eCQLJLohr3ZtgmqB2XwPgwiq5zb38VrcN9AZyMV1rWFWtpvL",
  "key14": "4HGVA86NMv8aU5Ps271aFtjd9WozAMLsopUv7Bed9pM19EvB3ebTq9XarnibJ7mFXqPYkBpQCEu8uZUb3UBLpsK1",
  "key15": "4mA67UoRaG7nB95aaNXUbxEhSYzvijr4aT1gvyDH53nq5YpoBSfd6o8ubUuDCwuiXUXzqL84VfDoMBR4gJk1iWZm",
  "key16": "5kCjRpPMhKrNa6Sga2xQNzWgkSMVVvt9pYXHiPAd6eWhP3hZFDv1DFa7mLb8Jvg56NVMcfo2XqLsYGstCnh2PmLw",
  "key17": "3oJPpcGxpPvDsYLFbeytTJQWWyL4MUbg1qSVpDUUivMEYR1GYkXaQWikfXGV1XjPemyKwhEqWKxWorgcvLe9q5uw",
  "key18": "29qo5JLTmjLbV3sUYAUUDun4M54jiAyHXW8YedNFXKVjsQU5XeLkiSxUub8AK7mH6jyUvwWYotPAoGVM1pdvkvXT",
  "key19": "BMmJZXDZffzbxjbLFL4ivotpoMjK4X9pUHzrJAX1txqgr8s1spoQEC5tsQLiZ3u3CyPUSXS728VnTrhbp3idH39",
  "key20": "338jFRjViydNZnuaGFa3iYyWm7qzWe9xzdLQAbKnCEmdUK5i1v6q7jB21xQ7tCQoZWdXLTXwqi36iHbfHvK2iVL6",
  "key21": "4ZqS3k1oLX38gcBv1Tmf2zMe655VEo9ziw6aknePJWsSnnuoNsLrLNvQcLiFiXoF1Ho5pmuj3dHZVZjNUQnmPc5J",
  "key22": "2VMUw1JrtpkcxbRn51oVZX7FsSBftFBP27NUUemVfvdBdch77gifyaaVwh7jJPMLH9FtSXCyo9DCR8Fv15TH2ia5",
  "key23": "5TJfyvx9NwgQjSSygDAsMfTeJ6XHnaHhRcSG5Na1yBBP7JzmZVg5hT71rrn8ihiw5N5gMJW232jNqkdFFErNBf53",
  "key24": "5N9zaZqdMhxtFRWvnPyfVo2xGpc7mSUKTwGxFnRwhp1JSQpUi4eyNfBgL6DrfeBPBGPNJezTHTPXoiN7VacMruGb",
  "key25": "3FRQwphY2tNtfSVgrK8nfPbhGAgb6CBzjFVSDEJoLFLMP14GoxaaNngjPXCRAJNpbBk2hRxTfxSnADnBXPP3nWJM",
  "key26": "5eDuNTeqXAZUDYrZMfAWRwSvbejoUcLM5RBQYZefxx9aeTMiiW6MnNqjGpHWi7UFZQ7EFG5RLNsBL23C3Hg7pk5W",
  "key27": "SzssEqz6LgM8fmRAdMna83wNndrxDUof2rma4krhqfR62ksGLUJRv2uDr7vfAMz3bBKQsh5Ut3hsNgctpiAShnK",
  "key28": "RTyGWv9CzGqzosMegY4B8iSK2sUvUJNvrSQh8RLDtMpdXuarSgVQ9nHWdRRo9P1kB3grPv31v8omBC2ssTUrWDn",
  "key29": "5DPb7jaLj2LqTgKukieAXfsPSzjQ6rwDfFQxBicHmMdyze8RpGYYFKCrjJ2XKzwYg1rcC2Aggc9XSgUsdrpVJh9a",
  "key30": "56CVjbWU2SXmQw9sMsCrgUEVmdJC5h66mqk7QeC9heopkK4cdGHkLNL1ywR1AsdcHasGBceRqzCCp2sKNFnakMEP",
  "key31": "3Y8nCKvU8RpFXdd9QmNJ1yCeHhYhaU7GsinvJ7ajuqss5hUaibzdnDmQmB5WKdvBd2JH6RBBeWPAmeqT58PaRij3",
  "key32": "2zdxbXQAryZjnj1SBQsp53Qzsa2pMPviKxPee6ppzaX3j1bNZweqgkQJ6v9SKT7yaSjH5NPvcxykskLUQv99BTFP",
  "key33": "389ridhdiRpaHkTG5tP9qqPYHSUMgCMErE31xPBvpc3512PEdPPLMK5CFnqSPzWxfAeFgMsJaf88RueWr84zSskV",
  "key34": "4dVu65S8EbyxfSETenWrzDhdRjdL9sfAPTENCeAAp1Kg8ckzLDcFfqpbSPyiTXH5oXbjFknuJM3wvr5sqg7cGnQh",
  "key35": "TYe83dJZjXyjYCFKaNsdKB2uFKWBkxaDRJUsXcAKEGyHSEjwVdocSnqh9acSNnNYz4bBfVd8Xnb7Uwsp1BxLeSu",
  "key36": "dmEjQuYjAkQ2Vo79axe41jRntkTgiMfWJzPWrZkk2ENFeLGBvM9juM4JtUQpSHU4AstjK3qhA8FdkuDwX2ovt2G",
  "key37": "858F2rL7s49k53vZCZ6Zyv6fX2C8USpUgkVeAgswRUVDpZdNzHZNpbMpty1PZN3c83DSuz1FULasSdxC5Y575TL",
  "key38": "4rSpRxiF5PYZAY52mSaqBVx9atwp8tou4BQWrSfxTu8gUrA9B8qqH2m15yLzfUUrM5qJWYm79ZqViTS6sPSEBRgM"
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
