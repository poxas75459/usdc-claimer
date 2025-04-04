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
    "44tfAfo6WQw5sXseCoHyEDWEcksDfTwoz9tJBeV3QgLgtirBBY932ewiinHPe3e7r83M6AfKanWd24NxQmheeypQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8WSnXXoDCN84EvrAiTRpnNcnGUd3YoGgFwhccjZfHbu2aHYRdVU34fTJGqgJ9X7WJsgvgrXyY2WNbZ6kYb4ysh5",
  "key1": "5tEKJ7sNDmeBLGj5iGMKkg6FUE3BqMeLUjWNwi53M8FbhxUmkBVzGX981jyCJmho6HCpQd32X56nKefXZaLnzvdj",
  "key2": "59dtDz9W75UPm5rmtKzewe2VYuf767mwbKrYkMucPatoXPGG8iuomtNqAiVzXnYAh1mGNo4xCAijuHokhqUioHHN",
  "key3": "2cCF96seP28krdErAn9fbpLme2vDKQfug1hCjxxDD5DHdGa812q4mtD3qCrkbEPk5Pe7uyse5Dv1o3qsRs3KouNN",
  "key4": "54vN6agLz4wozeHGWuMjyiRr8zA1wBx8bUJ2oDJEBsV2mdoYA6ZXZLCPcz9UwJ6zLetSP2B4Z5XBK2TtNugfveLo",
  "key5": "4jWTX4Dn7Vbei7UESo7aYe2UJfv1UsPqZ1pHAsVTvMBCqyrZTJi1qHF46u7HusbJXTHqdh8EqytamPUW6ciYo3Nr",
  "key6": "4vng8VAEHNb6MkZZT8By9DV96nTM3FfzgN48pm1yAas9RAX6QLxsEwUqA4zaYe57Gd65fGC3xSQqS3qe7Dkik7M5",
  "key7": "5n62UGpQ41p3aNKuxHYk5MVvs6jBnaVgRAZfnPyLRWXqoSW3xPKFGT8iZrELwgZTfY7VnT9AMqYyaQyLFbVwcXop",
  "key8": "2RYfva9w67dqmGTyMPZEHNhuAEsMxeEdYEqDv91ktLPcgXpAJbCKZXHgJXziWVgMkDqvwysjQYcgyEoRSnFJh4t2",
  "key9": "5tiuavd8YfofyZh1vJ3eWjUq2zCVgzUi6wVoiagw5K5TUT427u4JQBZ8ZPAytHZRc71ecubxspMCBJFjGdmkWVbF",
  "key10": "2kn9b3UtFne1gktutyavVGZki8aXxHkAgaxXzPY7J5i75HU8cMR2kH9JaNGJYrf4soQ7ZuCYFwibrXCsfA54eAso",
  "key11": "5GNJsdkwnbT6rFTHWh3gtDGUd3mNauqxVYVnooNw3r63YoGW78WKu1Fc6tARKZcSqjD6MVPZyhGCCWemAEmQtxES",
  "key12": "YWVRFH1FjfMG6WqUBEPXL4NoYpSjQGKfLiCsP15qd5E834Dopcse2u9GwkKwi6JXbs3TxwCqWgp8Bq3L96k7caD",
  "key13": "3vJiqkaStthijhmuBMdZdWfWxGj5D7uBNLSsAgN253jTSjEjga9ZtZLqatZtYswd9TMpTfbvSfz1xBFZLsh1cPLT",
  "key14": "54Kr99JvkinpnGPfZWVWuCkpeTbYy8jdF75DRPeckNLbcy7p5x3t8MCyBJnjwLXCG8BY9CcwYqx4dcs9kUxwrQQ",
  "key15": "4SqPhaNtQzhRuCpK6KniZCK2Nx47bNsPpmJyX8UcwVHxssKQuSqsmLeCy1Jy39MuVDnDpGKApprEuGURK5dQF2r1",
  "key16": "4ZXs2Z4VhPxEVj3LgKANiSF4p5jXQ7KCPYRQDFWsPiPU46kPq1b3BWBN14Wf3CHP2ZjX29rAAcd1pupBtCEndk1t",
  "key17": "3ND4AokVa5myP6zRDHuNW9SHCoGwimNjLUDnjPzgAtzuLR7ba6XUW9QCDJ5rbEQZmYt2UuvbtrQQEfzsPHEFzivi",
  "key18": "5GVorEqn1hLyhXV2VA5hF2cgCQNug56FKQ3RLgRDGn5pp3CFbPyYKk7dV6KLgymtqyYGoKDApu9JAhTxuEiqckje",
  "key19": "9QhBF6dvJHRdvbtPemwtPQgcYJ9mkXhSst95BV5SXLhzx4x46ZukcyK2jXKkny3uYzrkDj1gLXNy3upq3QpXHxp",
  "key20": "5rM4hXidJymMj3GffNZtzz2gHeQQ8gyrAoesrPuaSzZaz6MsXD7d8NNyXeNnZnoyTa71x2C4ASv2PaitZfuuqCPA",
  "key21": "5WLbBruevTDnNgQxfsDkfkLBt5EAcdeF92gaUtSCeCcLHYP6dNiD4nVY6cry7wuVv4zWcNgkpNud7MXdPSs89DXP",
  "key22": "5P59xWBvikdK5EZDBR3GnwVP2ScLVK9oKb5NPmfn85Yo6EsfAD3L5HxjXrCeg2ytrAC2QxXyUs3kc5BVejfwE2Fi",
  "key23": "aNFdGdRgjWTeJD3s2yk11rdmeGKaNu5scjSRHUgrby2c7DqBPSgHdBeABPMvqnGyPE6RpF3dCHokoJoH8S7G7Am",
  "key24": "4MiNguNyV9tFWdJNqzify68WxXhEcMRSTAncZP5XNEkaLW51LwegxWrLAUNjXi76ReKaevRSyELt5E9JicxFGgcy",
  "key25": "PpkGit1oBKTicaFg4QwDZv5Kwq4rX4jikonLMhpXTaW5omXuebcvmLcmJzEfY7YCNGn8vuN7AZWhXkrkHzqNmsk",
  "key26": "5ZH5X6mDBoASH7rnUSkX3mRSKMVjV6ejxjghtRDQVXbuTnexBm4du72P2tnQJoPPmap1NyLru9xggMQumUGnHsWf",
  "key27": "4NxAgveuNq6KaaiFjWWWtagc8ra5z5KEsPWAtGCaEBvMZaLajNPuEkAvXSK2VUucL4Dzce9cBaW6XJaWpzpmA13o",
  "key28": "3DcRF6VtRhfrABf9E1N5PcV8ybvUqXSt2hqg8BDHnouLHR3FaKYMM2ork7XAVz1Rqbbsaiccg9nvse6Rh8tHER6n",
  "key29": "4TJt61eKWstGAWMRHLQFMaCVZyey6CwygY8FiXvzkgHVwBBobfpBVocrt1QEeLi5HGNG3eaBSnrmMtjyzJ99fxqt",
  "key30": "3HJvjadeDWNdFe17kQBS14Lg9kpz81obajijbQUzCU1WFpZZNieMkp5BPLWV1e8Mgm2qcrJCfUbbCzZHUBgjA1R4",
  "key31": "5iVyovTSgsdCKFG7fp6xRF4UX66p84BMULDQQxjtzVnPHhhBsRAwtB6MWvoH84qHcB4WeGYLdS4vDh25uJF97GWb",
  "key32": "552zuDnmS47ddqSR2V1NpNgLPX2g7t9LeSGTaPAEWWN1Z3bh8uFTC9hRHJ25863Mzi2GhaxWgo2H7t41RbxEorrn",
  "key33": "3W1SM5SYATS6Lt7Uie9XS3fuPoe95bPERnaezDwMVgbD2h8zLmhnQQJ3eJh7w3UZuQ2NG9orxbs2iZD9txDnr38f",
  "key34": "yWJPVaGM2nmjLSinWwTzWk6wKvQQGeuLqT1H5n4bZ9SmgGPvGCfzrNoenwXjQx6UN4GRpFVaAkTP5mVm16s4gi1",
  "key35": "3MTdCR28FY14gsSrbayYErCcfyyreZ8k9vxcbK484mrPXKvt2cKskrUW1PxiWhQ7CFwAKxYUyYKsZQkcxgqCGFQT",
  "key36": "5uq9q4NU8fft4Gw5R2LZo7BUy5Nc2FbnF24JziWkTHqqnba1VmgFkZqZfBcof58dn5XXEo9abbFwCCiUN8QQWNME",
  "key37": "K7qGKP79MKRbADCLc3AMGktK3DPX9eF4zhGGSPsL6V7i4oeK8G64KucYqPmdM7pa2tRpd7J5dFLGhY2m7mkFLSF",
  "key38": "5ncWcY9dS1LspXxzuUMtMDmALyYYd4byUHkKSthgr1337Leo3172U9oz1TJFGpnZx1Z6S2WMh1XHjaoGiNRBwsde"
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
