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
    "23qnEhV3Dr1RqNXE2tSS7fEzaG2AmEoxH13Vsvi4xLDWhX8T3QydnQzjJgdALoFt9kwacArPeNdsRd29mPjCpgfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVwPmzRJxB3ixra9sQ9PHPt4LtatTGEv1yrxaiTKYKYG5TPZC39ZsuE3daoyKuqx7M3NcNC2nD96ofYkyjUFfQx",
  "key1": "5ennDDL8PdhhvtBTJQZZkYtyZLaPk4PrLG2A32Y5JNXiWbM9ntKi1r1qR1KrAennmKoBnsZSPgmeAfHV6zYd8nRV",
  "key2": "3vVW4gMzF3XowUjPzNujgB7RdartzpabzPdrX3XjbzhmNx8KpnEYgJaPktnLodrwUvkHfS9PmfFiA5Ujqcb4J4uS",
  "key3": "3VUjndG1CxZvZTbGs24eQFxCLgeDkQMT64nqhMufXdJzKAqAt9za8ZEAwTv9rpNLQHrjXykX4dkvRBmzAtHDX3QQ",
  "key4": "223NvTYCuaf28N6veHbK7oKGsDqxVf51uQCeLW7ottncYGrpYD8majfqK738msBzkgRHeZC6D8WqsHMFcA1pQBHM",
  "key5": "6bexRkZD6EpXyWeJPtf38zssZvVuxHbNJu8GqjSbnzCvcPJcKL2TzMBabfUsb9jdzW8MHA5P5aDVPnLx7wGUw5a",
  "key6": "57CetqVzQypMmfD7L3zP9TQmH1UUPffCM7BRtemynEzE7XXnMaeSsqgsmRT7hXGb4rHj8CtngHNKNjJ1CwvcjsLc",
  "key7": "4mktmJdWVXTeLGmR81uAYFfrDxkrGxju5TKqVaFRpjuNe4nbWe5b2dx5kfEdyNd18SjCYwwA8JcxdjwKdbGkcnKC",
  "key8": "XaE8LxNKxACf9D7RDcChjowZ56hHJjYceuYqx49HmL1vJNmLLavpWRyZGmVNsWM2g3yPuvJGYaoeksHhyATvo4c",
  "key9": "5DEioSfwqxwqMo4SoNPPNijHhJFkVAeeMg5mNiWwrkR8eNkmofKMfxZpJhwbsbAyRrFYj53ajAzKnRVWSCrPHAXn",
  "key10": "3hFYpPZvhLhdYSzB6bGQS7s8ZmNfDCo9G6VyZ8CAHSiWs7aozxTio54wRun1VE9oggWAomEYCYCbV9f9iPbRgXnH",
  "key11": "3NVJB7ZyVmJ7NT4JHNFQ78xhnc1ZeQsPk8b1Cqx8z7P4txHLbWgbt8qbK9nQc1DkZTXo794ocgxnZzZ22evXBUwG",
  "key12": "ut7PQX7Un67BbBYUjaVcte18aoa9ucz7hbBLi1RZwEDRQfW3VT1BZ1VcqbXA9vccMA1ZFvRVFZVnmvn9jV6tA7N",
  "key13": "5ftcx9au3KZMQEZ4GXioxPEokKYvk4eHMNc5nbpWDfCi7pDxsdXiYuqVC3ui3ascjcGWN9Z6bJL4J4LtcJiGbxbh",
  "key14": "S7r2oLemfnAxA8V48q3YvfA3W2VTnagavXhANYZBjmsg54j7QydtH7TsymhUo45GWqoCsLX6oZhW9oQzViYPz6g",
  "key15": "3LkKryQZAZCKLN5MbPZQUNFhHkWFy8kiFAEgAdbqKofRzj8TnL7trKt6dMVADGRqhXTPpn15uGLrFpeC5utFm2Eg",
  "key16": "3bv3xQmubBA1CcBHz1ZdTsWYrxHJzrKKSEVpqAcgXyrx2z8uxmtVjXRh2Buc8g8sCeWWbhTin38YQrouGwKkQt3P",
  "key17": "4pm1tduzjUPzZT9TaGQBqzsFzPs6vXwLjT7dPDAJ9uBEQaxon1uihvGebCpFBWKsH8ewwchrTbygPL471v9AAUua",
  "key18": "5DcLzXbjsF38WQVQaGoN7cSxFdUiC2vyywD5CCH58CFbVseTRMgSiHUPD1PLJ239pwcsKiMU2vmLgXqAAhUNaXnf",
  "key19": "2bAQGyiBuPKCT97h2ibaQRSXqqze8zVdyzemesfPBoG1gQAxW6J4W2e8kD9hphRPQB1SzfiPBBaZmr4V48Nbqhbo",
  "key20": "5K3QrQQz21ux8NoViLC2zFZxwcYKSLjM6jsuJUaeTr3wdJj45xdrmxVsFijWCGeLWKzQGXhXnvJnteSFx3ogAxDr",
  "key21": "5sZKcVinagWW7Ewp8JgcuYAWotrTp2PtpBsD6SiJshkcry9AfaRYRpv1gd8f4Yo8x7QVat8R3GnKdAYzPBveVPtv",
  "key22": "3R9uhusqYnBrFBZ7TLw9EkPdbeCziu7DrhNWP2ixGxQBa3k3zwMUdYk5m8icat92q6QTeYidRh5VgdGzWomgyLSs",
  "key23": "2iBLtpenXNW1BnTEtVyQ6XYotNFc1KqukiQ823unXbQMif9FrM9d6nCBvtKHXsqDXtEWZwbNmk4V35seP8nyn3eA",
  "key24": "2ieEP21cPq3vybskvmWzbGGU5NCGZ81pPHPU4JUvyhojVxVJZaVuo6PAkX9jVhDF6jbQg8RGyLqg9VJ3oCN39Rtt",
  "key25": "4XK8bZ87qYzbQAr3CBDvsTkL8AT5EQVXxuMiy6UJ4Lao56K1pvDeabPDJcee8W4y2rhXJ9bjyfdDz47zm9Mik8Qg",
  "key26": "27ddkZjqMjcQhSb5vz9eMGn7HTBXYY7YQMPX8bQULAFJgzuqGkwtM5Dd97BwCnDqE97Z7kBSRQt6Qkwmh2wEUz1K",
  "key27": "54ckZwH3Ptwe991VHu9Qmid2Drh8Lbfj59AszddekaWeFHQHoZRhoaut6fKnZT6paSXXh96miM2nTaj1SM5tAaN",
  "key28": "CVcR9Bdyb6yL1PXN6xks86ueuhDte1WhrzLFyaLb4FUNvVp6KfYcU4dzhbxwgqVg2xCEwjLV26SauhRgAP1HJ2d",
  "key29": "6BedEkAAvfAnqTKkYPCf1zkPapVc7LjbsuoL286YYGivm579UHdrxeieJnMoBdxnKnw4hpDBP5EZXhADunZxRE1",
  "key30": "2ZbwAvQxbx1e7HJFphtBtHP2Jf4VyApkFifgiSqdJ6PsX9PoAZNd3uSNDhRzD7LchDMB5dZniNnj3NU1FswWX81t",
  "key31": "5XA3G8yt5dC3bnT4VvkTXo3BWXZycDNJHNnVXxbdN4AjAtTYJJVz28as6MsRVR1iKuhCMaQGnAz9BUYhwhsNaEdi",
  "key32": "3ApUyZTv4P6HvrmuS8pTVKNTHV49TTuKbZGbs8kkyfarjXDXrHJ5pmsGfk75pmRRem9iNC7zjBKbx6RXJtiWa2j6",
  "key33": "CzazHnfGzxriGvN3ytYkJ2WcmQtfQgYmfMXLw6FtAMxaMK4ybAyaE75t2AWQnUBAmaXnNDQ1RPCMUMpWWud92QE",
  "key34": "4FEkMogcUrcP9JiGy71eqqp3LY187vbajRZDdHxoEsku1qYKrHgEZmdgTQQs99aj2Z5n1q72Lyqh1N2m9tkeZZq9"
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
