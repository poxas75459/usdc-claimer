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
    "5XBFNBpdsHJS4Hsae9yWzitmzj9z1nRWW6L1BBBjin47TwdnMKT69MTBc2yxEJZBp1HmPLykUGqgBXooDQzzGj55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t6bccMbiaGZLCyFYEeLrgN37N9whsumSt8qGBXiKotafjk8fMtK9TVNsTPLZN5YKcSCKceWnMBuFyDjY5EKFeAY",
  "key1": "atjxd92AN6bQeBAiEdJ4eUL4jHJJC3N9DRb47M6wXMnLoqRtie51cYpgA1UXjZeGDWx3ZrJj7nhyyDJDgcCjDxC",
  "key2": "478p7AA4mS4jDYCU5jR7ezto6mxdVuAh2z6Nb8WZtkLj23jMVkrxXmM8tD2DtLPvvE3PU198UNcoc1pLQnpG1WxX",
  "key3": "2Drh4H5nzH3QE6svjTe4EoZv7SNgX3ttZpZHoKbyubwWhM9Jsr42JiUsanQLxNRCULAadoc5dJZhZ8mTDUqNMKbQ",
  "key4": "4DStgfp82d3ysfHLtDG1QPrjXw1T5usejfxuJ73R15Nr7GZreZGDnr1DqFoibDBo5TmVrMBvNWUrDHgVdsPftVEB",
  "key5": "5u8HT8k9eKMAddiYvn1UoNbfEZmsNNQCpcx7t2s1MkDwAaAk4PE8mAHtTNk25EFNuX5sJnqAWaYkCz5TPovRA5bb",
  "key6": "5TAgf4XxTG9FDg72W3brJSoht7Fw8uxMyiad7p9jTqwpDmGruWNJhnUEwwUaFZLR7pYepXi6zQxCXU3KkPK7TAWP",
  "key7": "2NovLHftPSNoYurHveH1HrCdeVt5uwZTquH9pucoJqTQfdNsywCR2Pc3NULMPkhyzavVCHiAVKnSE7KcrKXnFXM4",
  "key8": "4gxTqDok74ca2eXZRzBRSs1SWJZoPaKVmH9egKLydraLKeXAp3ob4cgh6RQFoNESy3BdYEPwSdnBkwj3PDcMGFYA",
  "key9": "aNcCfpBgKR2wUqE9qU3aEbo1CuhHwWGRLB6q9MguQL3M5YqKhaxSsPPgBsKswJV9uBtHqZ785mKnxncp6hxttDE",
  "key10": "5T9X4ih6c9wskgub5ZdkEXRtizHQzP2jc4PcGrt8kh35449oBa8PRXKvTzNTdnfpyxDFhjMthWmwdcomQM2C1tnY",
  "key11": "5zeKVD94SzkNyFqdxNmWDvfjX3sE91V4U9FZQBaF8dNC1vfeyjoowiQnhegQND343R3JMjbUfCwVDvbBbGcCoaoP",
  "key12": "2QSoTSDdZRUHW4HZPoHC1L25LZnWopFEceMjB4nbsX7gqKQ17wcqgPfWJyXDFzdBgeTMFMXxUYJvmtEViKMczvyh",
  "key13": "4CnGFFC7uyEjeJB6JPpY65dLfPwsppTWwiszQLp7oPPoeuh2eEy4s74QiUw2x4gxDRDnLu6wd5goBYdr8BgfrwPs",
  "key14": "whZo3FCQ9TBgbAp4mJtAVLJ2XuqzLKu67h2uar1gGai29WN2YB5wm5QQZ3vtrQfWRnqaoEacmzTdAcGG66TatdU",
  "key15": "95XDcvDow2DEsy8PvYYmVi5nf6QNqLA2JXafCRJrudNxvZ1eNV5znthEzBnpq19G4sSW3TEG59zJkJTLw1rqSH2",
  "key16": "FWpTHHKCJ6sQCcGdRx29MoNPV1gsPTs4LuNbYHF4fTiMenP7prUfDChii2CuSbPnhbqqAx33fxNwenL5ygV16x6",
  "key17": "3CMuQ2Sm724orFT2SX2hbBuc23msi7M1LC6AiBJN4eHDdA9N7kapSjCPeKxm8novCL6frBohVPUvAUXNACa12nHt",
  "key18": "3F4P2enieuPBi8Qw1hzUPoQEDFXr11i6nHE3FFKuitWGjyqnhjhL9uPDfwQ88NGBqJ5LEuSEDpEoqyXkNej5WGe5",
  "key19": "3bgC3mLP9sg8V7JBcMawu9kCyfuQkS96dsFRAvZui4mVNjuarkH9WvxZU8K41TLhR7zpjzJBppAKMh2r6QxW9U1e",
  "key20": "5zKTTUtRT2LvCt3cF8VJqCP86NXKyKgraJdw3ZaZBbFfFe3jQCZxze6N6GvGUppQdd4ncjKUK3XMarJqJPk7YzkW",
  "key21": "42DMQAqpb81gaUH5G1SmfdT8uZeareDVH8cpagLTPfuA8A83evQ9uRCGhpoAiFDPndAzy3vWoWXebxp7H78GAQQ7",
  "key22": "3zcXjY2uVPXyCNgsHbBvtFhjQQPLWu5m3EsfCbZtmXUfmCS95bwXMhCtCfacyNVxPaUuyUzYAhwi8ugy9FgDE6MH",
  "key23": "45WgTGsdeQ6utGH4Kua5e4GQr9r6Nv6GBWfAyVedz7zPhk4DEfZXwgQqz3tH3kro7g6iwp7pkzxpU6gureDwFXn5",
  "key24": "2bzxbU3W6VY2wW2fgZmDvAPU1No7Ra16fXXKp2fHLVRq959neFPpt4ywomLJ7bxbrRRJUSngz6RznK7Mwnni6akr",
  "key25": "3oUADuLx4nsH6W6FjG8Hwh7jq7J1ncK8GQusp8Vja4iqwHGT2imKyAJ6w9XYV9rLwiHZd7QrVWRAmZjxgBuEtvuo",
  "key26": "31qyiaYGv4Bkvc7XM9PLAELQbZmKm8GJUhNwHQ2WgzRq7nft2BA8JbtMtGF5inakd2R6j6d3CUhesYBvuWTk6RRX",
  "key27": "4U4xsuKCwmWbMhfs756FBW3wSArPc8ZHsKSRDBTWSoPcsF6d4Z3m4KtgHBZTWzYX3vKT8jQgxsrtvZLD4Chs6cLr",
  "key28": "54j7J5DySCKTxUHCYDDszFUjgEpu1nXHjXFF4t85MUXpB2ftgmiNM68Mf9Er9TzLMAhLnJdGkAwibZwwPRzYku9W",
  "key29": "5w6bv7D57fx7b4fSuc6WitfVmcBcHmNfYuFX8cpoBgQZhCiNmVA26j3ChVJqDekrCR5QE7GJsjZpDS3kb2h9tuzV",
  "key30": "2Q2h7mCRnrKAy7ad3AYJNZmwt5nDDT8M6xzYcJUvppm61hF27wkY64BE1g7n5Euyaoqxs4pEjRUv4AERKFVx93Lr"
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
