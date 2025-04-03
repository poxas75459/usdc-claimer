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
    "2FhnFidThwP8tNxvsXr7p7a254aV5iKysCvQAepwXsAusGX4jijM6U81qtRzzq6SXfKid1i4Hg3RmEn4ivpkcp74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzza7xn6L9X7sjUXZs9FGycgVvWGrBS7ouH33fNbdNCKa1Bhb9LQdooUDwpByjJ5ZT6k6iv69VzvCtHK35SfsyX",
  "key1": "4xf2h2pkvTzz9NRvWtxjiMHBmvYKm8iBsVTbeEHy9dD7gQ7kEBXh9m4VoK487mrfLRxX8tpremKdQCLukbH1bmc4",
  "key2": "YRT4JQCFZCNkKa3qfxZpDs4PioMtTxsXBBeCniLHDWWjkRnvVhE2HnGSJ4KHbQ521Q9sbw7uHV66ZR8N8EEgd6i",
  "key3": "261aQi8PfpYV6MK7BkG27TuyHEYeipuxNRC3HNLzTSUbX9tQaqhvcftf4JrujyJ3CbCwNFoQGT4ZEpBSggKfGzgU",
  "key4": "mRAWwvYhZnF8SCsj59weJhoZxKUVxhb8xLYfB3JvYvm48aCa48y3pGvGCnCNFmD3Lig1nLyjUWmUyWZ56RuERaT",
  "key5": "4Kn4vtbTeCBJMc6WwywqZqtgiMfrRGYuWX2DjAsns8485hcsNXzfvWk3BNtPhKPgp27JFZ8yeFyGw9j5zhQXHWP7",
  "key6": "2igySs26yELadwaw2PLYnyUV51WuVgkhBZtTDDGXxcnmjYmM3pUF1gAYRvBWCouH31Jm3UrhbLLd3KPbeTZTTb47",
  "key7": "4ayBthK7wGJxqxRpCXdbNNvPyAw3UzafUVEyu5GUz9BLYJB3UkFe1RLHiXzcsGsNKiTYn98yQ16ksfeScawnFXYy",
  "key8": "2cCtezDww87ANjbQF7oNhX6uzrjChLMK49Nms7gicp9q7hVFancQSK23GRQJs4N6L49An3JU1GBLbCzBMkm2YCit",
  "key9": "3D7WtuVA2cE62Snr6tsG9VB2xxw6y2986snk3pQscAeuKbvftH1LoLmGy6iwHTxzaUsuwaYJHk4gW4yc9ktm7rZw",
  "key10": "4ADWJL4roWo8GA6uSz7SvWCaU1B8aQwGKpL5Mn4rHL5EESYc5WNuGKPyvkgTSUNcq49drtgJ8WRDC8pWkmvu6SMF",
  "key11": "3Uw7q8byf7f24yW6UPCti1Rgs3gdUcUEusjd8gg3DVxeqrSD4LezucHV644cXRxFoRD7YUGfV7TBoxwpEJTffyMd",
  "key12": "3iKtLnRNG1PG88fTEREXycS266yy99xCowzx5J5zQVGrmtAtBmmHgqHHtGDz2rwUEUmbNELtaNiUvH6N7hSq13L3",
  "key13": "2N9Yg4bqTfpX7ZfdPhDgjLMc9GqAQwPfYoxU67n2jQjCSJJKpEjVxa1cSaNBFxz4FUZtxYGM1BcnHLjLpAhPombA",
  "key14": "3bNmZCYRykvv1da2ohHn1CyiHWvMJUGWrarGBRvkfHaBeFD4886JtuX5c4J32tMcf7wrTZhhjreGYWfKEQeTdqxU",
  "key15": "vaLS4dMwwCtoopmd6r1gkmLUsn82UxBgmYXk4Q8yuoS4TxCaW1NjDbna1xMgaQBMF8P6fn2gvCNEyHG1HDHerxG",
  "key16": "3GAmTHphqzg3cqctX8qwgtS3JgmPJhBBtfbGTFmzde8YNMwqTv1dribkqfpKYoqFAhTWvrmpVaSDSSs35AEBohHy",
  "key17": "5MP8aAkGDNZWaUBA4izxAx7YBEEooagKASpsWYsoT9V3UfE3We9fK3vhCiHbj5fSkf6TkWUKwWNS6SpCR8UaNzGf",
  "key18": "5CYsojGjrNC5NEgoYgNwMG7tgD6kdZgMJfjoRNGfsHANZxyzM1nYjsZRGG1v7e9sZGpjmrGwARtVNb8h4eDhr9ki",
  "key19": "5d83x9xUMRKQSaSuBx9VuvW3VZpLsACntSmenbmoHL3i5ufVwbQKyoiK63MyshDhESLzr62zoiHwXattVsuE1GHt",
  "key20": "4AEX4wv6nxb2eMSWu5Qbt8D1reYs4F2wzyihBeZWvT7NGN48aShTF7wadATeozacYSGAAUAb99xuZkhbYW4QxLd6",
  "key21": "5NVj1HAhrFR16bP5xExRWAxLqsDticKBvekGByu9rGtWW7wCGwtZDbEXrpJUB7TPBhigbDcVhC23rQQcmHotndGX",
  "key22": "46EXyyGM9NGfXbBsLSPEGyE9NdBf57XU9Dmppv2otkbk1QhoH5XfjYkuipjrDwUDZkKwGFZnK35Fp4e9bwSBhZ6x",
  "key23": "3Er8gQ4wqfMUbb3iBwSMCqXPiR8X4srKxcpyS3o2qFUjbbb48mH25qDuUHf7cQbDk7fpisQ1MhanHAZhUe9TAfyi",
  "key24": "7ctdLk8RDFGZhCLNmTUAKmMARCS6WwFhweB8KP92N3rQHc9PsjV9hYv727ETuaLa3wuvizgEGx7WroDEXtiAvzB",
  "key25": "155EjQRaXwz7aEBeZ1QAxwod3iTGU1KKmFDq3gyWbWT6EjaqjLJksRe4RT6bgobckLj8rtaj4c4nmAvSCc2ksPM",
  "key26": "3QDSE9AWi57z9hVrwFLvopkFmokoq67uQDJiPae6EbFfaaw9JrhGUYKhS8UfFBNiiyX7W5nb4kY35WMYg7YaEH8y",
  "key27": "2hMsoe6uRg5c45jcRTkS3Xu4jgMqib845ikmuNusZEhFuNu3y4nJfv85tCHKatBizQ3W2MSxgqD9feFFkJb95n1F",
  "key28": "5TJmwFJrCH9wuFAys87MVwnB8dgZMtJsKfboLjRB8HDfhwztB8uC7QPG93wZqsUmE1QHibcfLuKEudfapaLrGYox",
  "key29": "5Gcmu6X8LeGf3QfELAnxpHuGvNeWgPV3L869o64gPKqaNXnBXTsihMgTrFpMrfn14hPnFx6sLeAkcBNWpXisKhE2",
  "key30": "65u8ehu23svgfKguaBQbGiYPmUaGR5mhkJR43kgrcQRi9Qq4uwJRSwfXirUm14AJz4YP1j25Jb2r9SGkUWGDy85c",
  "key31": "5qpMAfGUmUYhx9JhDGPiSXbzXytYDbEJJN6fBAczdGFGv212iQMACW1KnanvdSUEpXLR83tizEzRWYHP3czMZkSp"
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
