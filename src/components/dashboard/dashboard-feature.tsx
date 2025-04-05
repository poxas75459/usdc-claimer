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
    "41jQGtn8tHXc4w3AGbiQVv3wAAz1dyZFduRhSezjSjv7Y8NWz7z5CnfdL2MsynhwNu6CkbZ7NBg8UHRZa18sATyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eER9U4Ue3XLbhTfypNBippCdXeV8wdeYPN1YNiZNBTmAxmY3JJ92ZauVy6FUy7kxxdckPCrvhVRmv456M3B2yxn",
  "key1": "5eTKDXjQqrmsbT8CNN8em1QVtYGkfSVEbFEWzAReDdaJDJmJhf6ZGRtvm6fZ4naWJc8Qx3H5V9QnEbCZ6pa65Ybj",
  "key2": "4i8qdGAyvmKe6pTbN1zZdeE1SfYa6mRwZHYcg5yWR6apVHLUBMQ5pfTfiN2uLLK1u6SFrXQUHk69B5CZxDsSiDJ3",
  "key3": "pHdagbFMt5LZcP9noth4Z6K6BLZtXjhR3KvfMcmMtk77h9kiWsAHhcKa8Kh5Yg6G4fB9Gx8tnJ81th2UVAQqy5s",
  "key4": "jxk19VVA73ArorqLFqWWAS1ck7xeuDkVNTa91DVmhXWym2gvcfxoDAWkvkoMBJ9oR74ug7Lf3YRwHCWG46yfPVA",
  "key5": "hELJrKxdCkZvkq4WsWqFXt7z8vzhiqxDvLPF1sgK61joCQj49eGQAJaWq11uBahEaXRjNVDJMbUkjaWTHj7rine",
  "key6": "5Xa4NGBeruYsNR17JNmuEScGubWkKm57cHvNokokaDUoNa9c3QkRf3WSEQWPj4LoKywjQB8D69TBrYfmHqV7WEuM",
  "key7": "2JgUBez48eugzWGRatWeDEKRrerJrc6vmGuhM99uUQVyYtDiR9SvK3updosmHhzGBn43RedtLDruAGtzZ9w53b6v",
  "key8": "59XKw4BMxoQ8VzGAC37ah5tdC1kJeWZmdeJBgcBwvYCSoYkg4sQekJ295dJY9pbZWDE9f3FccBip7xughYZ45txY",
  "key9": "2E8GCF1ehxWGBX8r91ecHeM1nPaevH2X2NegUPto8YcJMHgMBrTAxZMDKVAGnmNxewt3WFndPhzGMNRHAQqWng4W",
  "key10": "pC5b5XWtQWShNjjMysWfajjsWmfh1yRNYqzDs1jynaVxZfBxNUn8yAY97rULYTDmJvJ5drDbKytpd88beJDVLB7",
  "key11": "2Nb65JvgA8WQAi6faNZ741uk5mEiH6cPvVMP3VJc5wY8EZcrRsWH8sRJPmVnzG4UF2yVATDnChMciLD6pmS3v5rL",
  "key12": "236TKVH3uTe3nNUsHU53TtKucVSvwvtwEXcWoagwS7TbnQFKK2o1ejgoM9Ah3665urtxDJTqdaYewzjWWoqbSPUP",
  "key13": "ce5YrL8kkauJatMaLRbSF7HzgA4Q7veBHN4bTh62ovgjXRRrBJumLqWUhWPq7aL9mk55JhLQmLJJZoD7eC1CgHi",
  "key14": "fneeJrqr5P9YLovZt1XLbfCHPko6r1dLiQZTEB7op5Vji4TEBE67yNu599mCC4M6B1v7zgX7jdcyq4bNdsDyRoa",
  "key15": "4TfECrM9GwuvqENonjJSD6zw2WwXVyyh5xkRa4fgSFjox2A4KQ4NvZ23Y8wBsU2jt1kHEScZm4tYzf49KZKMoigw",
  "key16": "3XpE2hNZTie51Ks46VBG59aTwkPMjPZD2aAmEgAa9jyXPG92MrGUcUR7UCPqiNrT6477bePLptdg1u5YGkPoAbw9",
  "key17": "mq5uvfnLRHq6ex4hUY4nKVwTVRBXvnGNpd2AAoGnubJaMQKxmNwhjGLoaTwp1RdZBa9Tbnbvt7axVyyHPmMS2aW",
  "key18": "3Et6WQUUTEuwArSZPoYLvZsMmHT7DLaguUfaRWdfziPe6RtSyJEyYrG6aRjCSoy9hGkpEyFEz3Tx4gLxF5ewCvjE",
  "key19": "4VGkj7wgU1VQFmYDBPJ1e7ebnM1CkMNVgfRc8aY3bdxoZoEApMhYKVDpnVDJhHDt9SCKwZFohcrHTNMPQmfHm7rS",
  "key20": "z9GAbcU9AxWfzNG8AddXyzzszzX1pFHsC3nfEq4AcpzVgB6eijPsgzuDmLYjDfvgoXiUTX1yqon83BxeuGGiHXg",
  "key21": "3PyhjZs6FQuXyPbx95ih5rJXvHCTGHrixoGsWPA584SqqjHPwkDQAS34U3TLevqvvgGfqNSpUnJNDyGRfm1E4YHZ",
  "key22": "2G5unrUgm8cgamZufWMRAbLJAwHutdMhEC2Zph6CnjoeixZx4jJCc5hHfZhnudbbZLTMUNCCuxowYd5UCSpFaDvV",
  "key23": "3jPzVwfeDgNA8AbdFirsFvBhf6V35mQqE2ShyHHFEExmF7rxepvrpJsPcmEUZGfPNwY3VqZbb6WfKhL65kC8Rgcg",
  "key24": "4GWgfxpsPZ6Btxbuop66Z8qsRNwFC62BefWAdQyKusZxrQrngYYk87qLQm8zPeWNWFBBtmjpVXHyy6x7ADpDmnEz",
  "key25": "48U71zPJq16LvbvdBhmkmwY368WR9dNnhcDcQrNrWaaCidY7TL2aEb3Xfwf79nJTZBAcKxMqyrB4grLMwTkGP8iF"
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
