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
    "22YiV4ZVggXF21EVLbkkLnvsjPo7Yr8V9X8oDJKxjprcZZutfkQFdSRLRcaN7DGJ4KCfytXsBANFxprFZkeT7YQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLLTUST1g99g7ETzkaMFkmX62dTi9M6pFUfPmeuQiEuAEUphLWQuwYLoWYWi4unMnDZLhBgzpZ87aGhNN36kWNE",
  "key1": "5NG1ksPjbNwReh1WNbVgUSp3GanPUzKAiv9hxGRqRUQv8QtJtviwE6JwxoDiHy6oYG3wmiNoWQcfsexKBDjNcWyw",
  "key2": "4GtXp8V9KztbikxesmXyGn2dznU5bpaxsAXS1qPniS2n2XMuNx1UvrkgnQ7BGvRGM1nqBg4LoBNY3P66VPHvRYW5",
  "key3": "3hL1nBNngSLiEBZbMicBmLXt2d77DSiQ5hCmWREgvzLVBauMFhgCD1NggvvEQqbivsrxdXrQa7z5YogHhaZ67KyT",
  "key4": "X5USsbCZugv7ndeFhCAFw2v4tR4SHhEpj7CdMJBX5qRmR8MNbgshGyFu94gLxMrxcC8A9MMfr9DA2QhEyPMDm3m",
  "key5": "4UTSHLNZyRuiTDspFkYTEhJDEa4jrvhv1fHx9ZYqny8UY1xsxfJufNMEVfBiFcF4zj3xmcMjXX9gxt92KHRhWfnD",
  "key6": "56rwYsy4HnB5RmxqoMP5zuAE3mWm6aRTXLB3Sssu84dxyMikGKAhGbLjTN2Cb5hECcMYQ73FxmKFGUMeNpLLTdWt",
  "key7": "5RKJwSj54pWWW8iMggqgiwKBPTG3xCpYudPFmiPawpYmKMNZAVpTsMmH2JTCYz9YmS3KLPsEdKR4V3yKYs22mXmP",
  "key8": "4RiAdGi9d5EKB3d5z33ghLFMMrcVzV12zaadEzZwYa9BegM6jkLFMwxwTKBh8SirN8etvVqXjukvbXnYWrpetmE6",
  "key9": "58yfbB7dJzxLdkSmGDnxbwV6jLDyTiWccXtj1uRrVE1bafQ8jkcdYMVgt43PbVSq8QpGL4HSBt8gjsynns4whc6T",
  "key10": "2e33v2XUWh7D1K6nChnj6FgPw6uDU2abk7CER6uU5KpeJ6AT551tFNay3aedZTKUTSsq46aAgoza7ZB9T8iz1FjJ",
  "key11": "CEacqb7CCeW3WMnGBJoRMCktUpbbXHiA3UiDQVfwAxcKUjzFijTmWfdthVCbuXg7XuE7eYBuP5QxPS321r49Mbf",
  "key12": "3Hu9s65zCVo4GaNaUVZKjLKLDiJ4vS97iLKC45fhRMDUQgD2JZZpFtfAypZqY48YpSmeCc5Lf8KSaMmc2msECD4y",
  "key13": "3PFrG1FJmLXvvDU146JLX4ydmsJChVmm1v36BbnbXa4BvfKzjsCG4Q9zLuiZuq4NYwsfJ1KP1tc5ZKBR6Jq59Qtp",
  "key14": "5o4ymifv6UeGGp4NEiwKkBEkxXgEZu1nwoDuaU9QKrPtFyEsEHuTqE7vuqXp5n4zKGMuAy94Xfzctw6yA591JfyY",
  "key15": "kwi2ec4rzrpiULqq5kQHGoSKbqLGoA36FoHDwhYsX7E5rVPqSqZHAZKU8sW3DZgKSLKvyyMi9TMhnQ136agxrhR",
  "key16": "2tbMSiigHYrJfHb7w851wnfNLitp8wbh2iGCE73zt3cA8DiLL8mv7CRPtL5YUi6sjf7zM3vzTXzdExJnWsY2FQFv",
  "key17": "3qJ3dcqRFXGHvg5bfXLAiBe2L2RcjyRMRNYEXcR4X6A4R4MbRLj8cNZk1bHYKhTfVAUXzCehWYZgpeqszaYj6yF8",
  "key18": "4gYUKZRcdcXBnag71GbiWC4tcLDQrSXmfB1SphB5j8wMKXD3rPpTKNXMwQ7LQcJhkYVmMBDwd1dSE3uRXW1zxbio",
  "key19": "5frLhJLHtEZha8KB7vbiPXgB7X55LoZXwJAdu7N4fZJwi51JYTPwPFpWQws3kT5BVEBjSCtA6yfo97Y3WbVkHPzn",
  "key20": "2koXS7kWYim2FBaaVahiQcJeUp9NbqibR92kNwTsgPzMLi4VbajqMZR2MfoE1kxZvTyoHP6GWMxYHfi6W7LqaybN",
  "key21": "2Z9ERccocBN9KMDCDUx8ZarSbdkAdirZxWC2sw9CYdfPNYg4SZsMERCg8k8Tp8ngp2Tv9A7kTE3BRDHZro1ayeCY",
  "key22": "4DjWY4hpuhBGs9PmR6GbnwQZezj8DLEB7Mnp1RbaPgcf3YekoNF5DRxi4UYTXLnHza54VxRohzWrrRZCvWpZUf6H",
  "key23": "2q5yuCNjT9asjymovT9KvpgBDgQCs3MHesDAchYkh39we14egqduubspCYB4txDFo7aQYkzfWXUZjKhrLyUhYRuv",
  "key24": "a8twQ7yyeRrpXifm9mx2pWFojfhJ4G17EwQoC7MdZkHVumcu7MRA6GHZh86g7bVa7XVZJD9xa5VRyZiVkj39Nz6",
  "key25": "Wc6mXg1SXgWo9Hc24T4okfz9p93r5C8oeAu7EH4QV778d8TbExP1Lf1fpnkGm5Z7dhEUSbpyyjP13ZQqGS8PeRJ",
  "key26": "5p79habhTBUp6oZvtoJFnMouPcE68EkVSJHjQzXvJgx3HcWwRNKbxq58Le5TRMSaBxW5r4Gm79t7LsnhgRe7E3pm"
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
