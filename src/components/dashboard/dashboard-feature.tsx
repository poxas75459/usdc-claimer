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
    "4eePbyJyfCNFaymk16hCPk8BxBWLr2SmVA3mJbCBeSpWs1kLfa8PRt1KarTrp6tikLfUEfLX3fs8HudyQnK6M6An"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GnGF7ZWNqxd6tHvhqatoCArnhnRtoLaVygEtY2ta5vgPiWQw9hh34AiEJMK8aEcdKKJYm7eyf1865SJoyPoBCFM",
  "key1": "461ZwonR35c2nj474erfWuPji4XaLT3X4poG86opwCd7vYVjevNrSoWdxVd8nRkrL9hibBiMuLZYULCuBPCgv1Bf",
  "key2": "4WgU5iwN3e9hdRuMfB7eJHYpFhKow2NiRyYoDcYi8BXPNYVbEATFdTySggF9VSjdD8gvEmoom4M7re3BaTteNEPe",
  "key3": "4wTLDZBXSasCDFKj7Zpuh7Zs5tZn4Vk8jqKX4Ajd9PuTu9TKYWKm6tcbstTNxZPNVTKujx2mckcFptvNhj4tvW2z",
  "key4": "5CKcCGoiZqGSRJbRnTj16EqaE8FrxtXW8aTGe3BmT9L2VhYiZga1JzuNKupQ4jP9mcFg9RhpztXMh1puT5EMF2wJ",
  "key5": "5hxT9jpdozR4xyE4kN7QzvnbQLorhve4zHyk6FZRmwUkDUVfXG6oEYpEi7wv2Jbm1UKd5GUGFJz5jksvPD9rv2vK",
  "key6": "CufxhrHQCu5bsXHP29e9CFJ3ZsMNn9H5MTwZbnzPeh9U3eMwueDUdafpGTbdWK48MtbG6Wfj6kzJ2mTAQHNa2XL",
  "key7": "4cUeZCZj1WZ3tPA5VdoigVGjRoHThJb5BRy27f47fN5Mo1Wqk3JnijnCn2dXRrU234YAAptiv34MQSv1mLQi2w49",
  "key8": "4N8iioec3pWggZ33WnJNtDDjMAW67Fv6r8bWoV8VcqvKJMpFfWp4atEk2MY6RB6M6XSE1qThdiCWVu5HqpvA28Sc",
  "key9": "DqM1Mb1DrcWjatWqBrSxoAW9mBfQmFpT1gdSjfYXSvFJBdP869G2XKNu8GWYKrHavNRVwx42Nb8MFdoSGPDVqdX",
  "key10": "eQDS7jcf1UxVWFrK9u3pydp9B1uuLqYhR6wK6RwT63M9gUh5oALQfDo9iLiVBTX82tJAt6PbBLUE4oSd3ZzeUZa",
  "key11": "66wFbizYXGvvgoz6wzhmD8KJhWn6Ay9cHes7kZvcmby48Bk46fcYw2xVShjcEZd2KbJGUZo8xhp3iCqZigUk8KyG",
  "key12": "4KWgX2PwLcEVPKRjvD7bqay5qMqoAi2GFju49ZhEaMuAJoWaSudTJBoQMgcYLAzddFrpASLmvA6xxJvepyTAbMA1",
  "key13": "3mSs72EXU7Bvj8UowAky7XF8MYsRkYEUCDXLPtwXmM3dqBsu6owRh25dPekj9GjSXSrhRmwusssJG5VQ1dmDqHD1",
  "key14": "j9YFzyX3du7chcrP9gnHGELy343ASaHajiYuDF7nM1JkosirEtEa4Zfukjtj3vYskKnj6HMo4LVscpY6qRZ2DoD",
  "key15": "31j8psC98oLXhzaAsMCgzTm1UcjQ5XV1Sj5n9LEYeppmpYqQJyCo499XqmS2kpDzvS8LFSzC2Vm5BgxQyBiG9gc4",
  "key16": "2ZALbShyjCYPKPnDtMfTiRNhsBE85MofT9buXMkmb3jCxTpQG4u5mNSBy9duWs7FF571RtzZqThoK5LzEPaFCikM",
  "key17": "zBQWLLAYKMAC4h7w3Zmc8gKNevZHp4a76rg2DB7S3yhRGEAEvpptDf39McVqtZKR2tEqrQnAFPjXcyFhmWuhRnj",
  "key18": "4fYu5tCTb9ihqG1GBSqSPDVX9FKAqmR8x2W5oDH3PwYojhU3yXNnWmQbQy1YvFQYHrw7NRyRfRVBqie2YXK5PLD2",
  "key19": "3BrV4FRxfrG7WsFLzuwpNdVX32S96e1R5HpbYjua5cNvkykzo3miaKZybQ3MJguMqgoYL39zZ8uqmvsdSs2CHhmo",
  "key20": "2szGZHpNvre28cXFvoEEjyriNv3rJxiSypQErMsYr31A74qnTMRuAErSSDoLvM3f93b7Jd7ZeinBEa1pGfQ1E4aL",
  "key21": "2Q3ZZGvWnzKNQnyrk2eVhvfdCGHaEjaSjWUXnhy73uHNMd66uMbqGbLE3b78mUdm9eHVchwpMBycLk4RBtKqK6t7",
  "key22": "4csaWDhNctefu57gvL8Y4poKpXjXwFZj65RJ83NAyiYuZd8VRrwepMcCCoPdyMr1oUYzrpaQfFD2JdMr7BgUmufY",
  "key23": "RuLkfH5Spk4GaDKTyrLFV4Fz4tdYqSf9vNSPMcMeiYJnawnKXdNQiY43w71Cs6EmHJLEYcCTdkTYwwNZFC8kJEB",
  "key24": "uY1JHEhRg28xGoM6pdeQf52DBZaVqiDhEKWWbproWqcNuSJ1x4SG4v4y6P8wpTh5voi3QErt9edhycLtFinFnvR",
  "key25": "3ouNoRfGsUzQXVp65Q5AT9kaptpkXyFNPMnSDJdaaXcFqqjNsZQZx72UMcy2NVDvq58MjQqQWJhzRPrr3cED8rXY"
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
