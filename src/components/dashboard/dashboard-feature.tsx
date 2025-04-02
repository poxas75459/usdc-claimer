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
    "5N9ZdaGKJJdqhEKyy2Kh37rdwqTbjA9PauNjuXmDK7AHvKE88Bgw4UcfC4jDkiMzX4F5W4ynKGM87pGkznjMrvJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zPR6Gr2Yuvz5USt1zTLb346i83f1eT892GmtLJBE7tQn5asfrv36pY2CLdc7oCTuqaoe3XuckiqpMwsW21KX7uf",
  "key1": "3s4h6XtCbDD5Cyz6LmMsGm8XJ9fm86WPoHUGfW8UEKvVuqYAHhygL5VVyfwhxCCZ7ShkC3eFXA7UNxftuJbbHXmH",
  "key2": "4hkKgonJBabDZfE76Y5tVhQDFxSXXHHq8YhPKdpi9xv539XDak2a2yBTUHTwxW4SAbU94KN5G9BdmZxf9wcHAF8K",
  "key3": "qhK8Fapn9RR9Gw6YvD7y4KN9PkMswjjpnmnK64PjS1p1uX6BT88vUoA9sBAKhvHZguc417RnPM78Cu7dYJpADEp",
  "key4": "CNdzwLhyor7ZG99ArYP2JaSFb3NiRgqfDA6dvWv1ueJGAKA5TVLkSFJKR5iHN7n3sJL917HS6tG7REfbTmj7GCF",
  "key5": "3ub4DRbh4pSiKxtKNENFwnSPQ52dB2MED8qxie6Q295VJaK5wjfzu93ezTfB5hworeQ3ZAcmoWnDysh31bXijDQF",
  "key6": "DpksGbacUzVaKbtATwGBeaD35BsgQLDRqwJdmMTvBm3wAaYxtBGpdNxsVASnnidue8KY8vgkit9fPwfguH1j5pu",
  "key7": "3GSS8A9M6ZpiC1EwP8CnHJWMfziKoEJTkvWqatoKoqPd7Cqgs1xKh828KkaqaRCqBKtvWxktWmscuQ8ZLkuBqgAN",
  "key8": "2tz55u43dr9qDZacQVGy8f1JtDKJ989m3PHFMtasPaQUWth6TGuDEcHoc77oEa8Nt1Fgmedno9Wht553B1GFVUbh",
  "key9": "679C9Y1TKc3vW5888EmhH6E6Gc4fV6mjwYYv4gEecgs6wUZCSYkX1k8WxFkjkuaTC2cJGn6KXxNekKwM1L6UfiV9",
  "key10": "4BpwY8FjBPY7NshvssQYyuuUokJ1AWkVyovd6aFoZQ23fKub6b3kKkEQqgBYHwnaDtSLozzzP97nGByU79Vf1eLQ",
  "key11": "5996gSco6457AmR59KvgaSt5reU6MmW2oHFzcXhBZf7jyiGu7zdWoSjgu8xesnpMJcue4f3MQMxEzJPfPdov3vv1",
  "key12": "3WUQF7jnwx2qdrLxC5uay1ESKAYMAuPhnwtouQS7ZAjzZmeGQvMqoGBQgH6kxadd9XtDvbtsf4vzUXyztZTGjVRR",
  "key13": "UFrDHHDSAJM2soJpUsPhsp52GNknHsuAcRRxuLWtF6yRHWeeJyzv2KXmFzQpbLgzKT7hEvZvADiufx5AcHWTbnX",
  "key14": "zh61F3sQwLLDNFQvWD5rxfwHhjpxnKZtRsDsg8QuNrqqCXqhQFvten2zV1WtqSBAsUZ3KbgrQVZb56dZEbjCtPM",
  "key15": "42yTEp1yd6CeV1qJ5JQdqnT811XdtKmTGkRCZwq9zyViBDCXrjukLzn4W8gfbVQzydPgHVnk6N8RcqFgNRWuHree",
  "key16": "2HPshzrfM7iz1atg9En6JZSZ35nMA9c4x8PPWPyhSjexcP1NDTtNV369FhvJ6VCmXHwwcdLFNYVf2jSxkEyJaTjw",
  "key17": "56AqSFyQ55LKC1JAPCfZqAppnyEyeEzdqBnf8r4tQjR9UTuvMfnXPyijKrRc9RZWaXeoBEnFdUq86VDTJmtFu92P",
  "key18": "2zg3XivFwryP6quQRFuY2sczVmucoiMHK3D9tSnD9LXuRBbjJHoJMm1HbHWJMJXjM5vqDcuRgNk9f96oG2jJow1N",
  "key19": "4axfPWrn7faaYRfjNHJb1c1zi4jpEgYqBCU5gSUDuvKHL5BJqZfjiYCsrrzj9kNcHNLRd4M77wuLvZ1eUnfuft1P",
  "key20": "5iVzQjVzQHssvoJSe2xkuCvXyLPxDP8UKmbVZq9ScteqaN7mr15HSgoKXFe6GvmAcS2UoUFBi25SJ5oSWGhozZkT",
  "key21": "gYzoMHExLw1tD9NrjJojVqkpUPA4Ad6rm3CvC1PxEBVVELm7KeK9S9nCHDNsb3tGntHuADvFZ7U2ZhhHvvSB53v",
  "key22": "4XuMa9LzXkHvm6LoyYRRAeb4Ey9FmtXzSKCQpe1DjYGNvhJJC6CDdhrPGh6mw2Pw918G1gpoYj887zTyTyARw2CF",
  "key23": "Pm8zH6DMHiUWFm3xc1qELTGsVBpXsxTkYitkDMjREd6sazEFK2cWh4hpahHUVFeVpcoijQXAU2Hw98r58P227be",
  "key24": "3nJHSgx1v9SQErodekzMM2WLebXV6K2guDstYiCAxffsJFdP6qZpsTctg185sDVbeX1RA4HtxgN7C9VARBtMj9z1",
  "key25": "dVGJsSmYiLNvscSGvdt9tWTFSEUZt5H99Bc4AYAuVes99JjbxUjhJMo23CkUGySdkeEUFjwQNNjVHtVuTULWoJH",
  "key26": "5pbqUKvocKSNKiZpptmAcVSSz4mPySrmasRj4tANQfFdBnte5wf2SLtZwf2b1yMS6Kg7rSbgSTLxkgcQR2zgyJRp",
  "key27": "4YF3tL4DnXUSvQbBhgg1KDcP5gUehp6QmjtJRet3fpoB77EX6KdSb9QA4zpLuW3e1pRGssJTAY6JcWvzfkddV3Nu",
  "key28": "2WTCu131bUSabBFfSc2q3rMnpoCL3V2839htWWqttTQLV5WrijxMWBZ5jYUy1hZFrAGQF7jprdfePkzVwVfEWpja",
  "key29": "5PkuGymmmfEdhFsrabV7AmMbjq7hVmbwysJT9JHe6N1EZSfhjUfrWAiLb9mHLftmce5ABC6RpyNy1TcUKMtu3794",
  "key30": "4gefckpGGVivHmSb65vtNeUbpS6tq9wEFBXZo4oCoX2oAYY9fbpphgGcjH1Cb7RHLiFNCg8KTSUdEUsESWGB1Nf5",
  "key31": "4b1oYMheFpkhhvdCBL7ekvA8rgj56rSysXUz4GihWVDdMMYZaQsgtTyGiV963gmafqk3Jwwxvr9rTsWkmZtFf36w",
  "key32": "4ct22Efrd1QmCmxRNegnRt4S516ni3dcFPHZR4y6GCTkuBHiJXD6qhQCtZVBnPjYfdiTDuVi2Vj9QybzKW8uikvv",
  "key33": "2cFs1XGnomJp23rYHorUcX43dkrpNHWYiqrVkUm7Szbp1AMPNdbqxqjg9hVXB8rHvJMr1TkbjRjCxSfsHSL2oEeh",
  "key34": "5hptmBKXTanCdprc1HPQKjpLeZqfEFoABtR6bHsk3iKwXDZ1XSUPFW3excneqEw4K6iETJiZ9JdN6219yqd151dU",
  "key35": "2EGctFDndtJ7rEoagNtYKjPctwwo9H4aFL2ENNkooGvR1QFBcxXysdaRUUaPHQhJopYb4v576rsyFQTWkSXCAvHj",
  "key36": "TGxUmhswYDUyjp3ETwCGTi3mCf7DtQxSTXT6wrziXNmnssdAfUcY8GmQqUCEiau8zqiCuuqD8JFHRr4FF9UM7CE"
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
