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
    "5Kyv7ax5NFqjywrfJNbvNxzmWRn5abZ8pc5GyBRCpTZfha15YEQXBRMUjVjCoKApH68QDbihCMirMo5rLW2jLu7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kox8ZhCBn2HzRNm5pgRikc2e3zeV2w9AMdzPwGeopKHSARwtz1sHC3iCYWGPcpSof5DrmPCrxvkn5abadbvxSdR",
  "key1": "5uTavcznsiKtSNqmFxNQ6tWnapu5pD2qAhGLk3Z6LErhpRtpo2fq3Mfb3Ed1cLwkGrG119rVcq5R36tJPEaNHaRV",
  "key2": "4tuLRSUg2AHpWhiYDXn5rBy8N8mYd734F7BXEvpFQ9A75gfMNrWHV7QBwd1eX7AHhVD9gmQ2Eq8LSxztYjAMZ8iv",
  "key3": "3Qq5nyNAAadYArbSJxKC69QuMFn2Ere7ijZLs1y65U4eogpSVpVz6okBzqxLPPtywBfTnYUmoi4wRQKCEcgLcQoW",
  "key4": "2VKZSebbej4TyyL2otCnNbgdq9FUnCSv4DSfcmAoq6mSFFCyuqTgoh9VYRb75udoioricgjkDXYw4sz2bZ5x4s9u",
  "key5": "ibjfinJjpnPMBfPfuSKEtXwjaVbdZ7kA5ogHzLiTTta1674fqBrkNiMq1d9BUACyGA3XwBinfZ4NHEFRgCuo6YN",
  "key6": "n5ACJLso81vD6S9nPnC8D2uNbAkNvmcbnBiu7X2sgZJBhS6RB2hrozJksncJz9J7q7V5qT8W6731xfW9TdVVFB2",
  "key7": "22UGcgqgLtJAGPTy9QhGAjAiSqs5c6gjHs1fsfmDbhu69zVQy7BMzQWcaX2qPETVwxb822bXBRYSj35BSS9D1uPY",
  "key8": "2UNHmtbag5Ps3vQn3JRcF9mn2UpCyXSerNxJ6JVyArNEh1Kb9XVgoZZ8JDKcCANKq3fkHx5hSYj7P9aWyjJ2UDzT",
  "key9": "2bxwL3J7y3HQ4AanriWtKVANcwAvBdC6RZiVJkAEdJws159T1RJQWAH1ZuojdYae6TvdTfoqSy1uBhw9wuCfjAyk",
  "key10": "2HeDLxp1bmfd4EE4tS2cw23CiycFbZee5tZSiPv9KXRvbibNPfWdHAVjPbTmWvh8ywdzv3acNKf7HKY92VqLq733",
  "key11": "y6twWeYTqNAfwdeGThkzgtxXrzvc5syVvkVxxDHHjkbjpvkdTcwtFkcxgtR3tV4Rtw5apv31ZNhWKciQDZu6p97",
  "key12": "5ZRoE4TWBqaKHbHEi29RWJYuVCjkf31Tt6gkFR6RBuzHikVnLdyPP8unuviJw64vLCRkc2pmnL4USWonB43LMd1d",
  "key13": "2eCTFuHzyab6oGpv4ey9VhdLujxQ266tBdeZDS9Su7m6GdDTfWYyCSJFc7rcg24H5vecfVDD6r8P4VWcUmWL1C3s",
  "key14": "56hZGNgrisg8Hr3jMy71c6Lmpyr3HtrbAvkmKCgA1QL352HbVh5HJu3drBQhvnDaYGnB4yiPAwjuzizMq1F4sXsb",
  "key15": "13EvR3V9GBnj1SqhBSr9RovrcoC2mhdsrKRzvh6KAYTad4etvBvJtHzuZZmV7EG1cnwN7iJi2XXr9wDw1DKepV7",
  "key16": "2U5HSx94R2qHezEqBVnHNpT4wmmLELUH8RkW7nydX6kZhpeuCjFZi32agpL2nkmHHP4AeBMA2u1Ssz3i2XCGd87n",
  "key17": "5FyBrfWJGR4jd5tUdK1suG5hWxPKJxLBzy3rs631MZ3WWznk3Wbqq5ZscQcyrU9yABV6B6phn1roojE8wvFy6qG7",
  "key18": "4G6YGZrLgQbCcyJmeivbg6kvKqwAqzGaSKYZXwWz9kDmhfjw2JzWqzn6UMQMa8CLmt4J6oJAeXkBof5PQP3i5LdB",
  "key19": "2x4KftxWTWCKMsXPw8ovnUgeii9ammd2q2gQzWWHm2eE9t4CCzffpQmVGuy63DyffdmL6ccuJU2J36TCoNWadw38",
  "key20": "2EDK8Pdr7ng7pExcrXH7zUueumLirkFzFNVmKRWy6swksZzCSiEG1ojRu1Wpq9xhzKpmfPdQVoaBu3S6gho938wn",
  "key21": "5VhozgLFSYYhcNQqgb6ZEZxYsdmBigHRVcQtU5gN3Tvrjwav9RN2TNU2MBytpVKJKzDiipqZbf9EdT8bvDFVehph",
  "key22": "5HtQGA8W5gd97s8h4e6vJQxDzaJFNVG4srfwNYQzodKj7njqPgCLApGHECohb5XjhD3jaXAuFL3Y3UW7ZcXEXeJk",
  "key23": "2C8Z6ZDkHYnsqLu4mZrR71y8VKbyTgeLjS5KA2v84uXakM3NqjEQmrm5aNNqQXnAFX1Ec1tZ2Q5TW3zicXSUyd2c",
  "key24": "5yeEih9EeTFfpioSKziG1Eqwz1yjwwHbS1ivE4CFkakLvmvsssRsUg3qGfv6bct6R4HH9q2qooXdh4LSwx3FwK1P",
  "key25": "69uuTu3vd1Tjm9jgQM47zehxumKs6LPgNm1gYwfovuGToSwfGE48gVhZ86WWJQbqqshQjiLESfc4oNfatmMjrd7",
  "key26": "CHuJZdJELTEQxxgjjzDps8BzHyxg4bXpKaiqqizC4EG1CxC5R7h7UkgKhbTUFdEmizTbPXHpnKerpLCi5t7SVko",
  "key27": "51nEgtxDPj4NRqPP1G8sCQKxmTiaoSfDNiHeiBTcepDRYam3Q9qCkfsgY4h3jQSSNT1HWG9riWxybiW3BYne9ssb",
  "key28": "ocy4sKSYXpaUfJmaAB58RXWQCJdGB8f9JwdgebVuchRFeUcU3nt2f5m52PwZUpGeZbqazEBZ4r397JVpvhjdNrZ",
  "key29": "2Wn8XoHkyPGEMtuCArNq7NREqeiY9xuRHjqAJFXb3Ci1cd5bJjCBCGbh4SKmbSGNJKNmpyRUjXxNumY5kA7hRa4s",
  "key30": "2EDa5uX3YpZJf5PAhWc8k5LRNskzsiNCrnsm3ZR817bxkyw25GDXCaQGap3CoaZNTikBirS7uGNZcE8xZ9ovHc4p",
  "key31": "2L6ijk9uaQekFMhHgwdHCBAZXdUogYJ4mdgjUJFQwPJ6D5jTLN3fmvuuEzc3m6hoswY1eqqLZFBbVnSwb3coeGzQ",
  "key32": "5CFtMpWxqzYaotFoa5oQjfqLi3jSMWYRHcKEfM86KoewwZd34xFengWt1ABwxAqW3MWftmBDH41P4r9RQMKuDiu9",
  "key33": "2uAQnb1k9LP5Htei3KKjiuRG6jrkNxHMhYNc1dLiL2KW74fh6D39ahBeHTxB87yRjTY9W4PEuEDGdSgtJcomxWXD"
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
