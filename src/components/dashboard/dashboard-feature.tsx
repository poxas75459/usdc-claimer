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
    "4BPnoUVf7JngMUs1zKERN3cham9hrMQh6XY6XYj8sdNpVAjN6DN5MZmHXUurN6nB8K77Q4jZtvGHGhY5fRqzXGQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nAzwWRTdQh5ZpU1bVmSamyDsm6nivCMLzKwxejB3UUnNq2JzYkXg6eXtw6FzWA7RyNf4SSywjCPoeYoCxcqcqLr",
  "key1": "4U5pktzyFXhzr7n3Qq6JgYbJqTdgQrUFyDwpzLHukVAvekMiR9uVodqb9KB9jKi8ZPhyrbxiVv8a4SckqU3k3n22",
  "key2": "31WXeFxQv9pjggZ1TGGnsjbqrbSZE9sHUT9GbJKmWfDqNbEJxr772p7SsfmvPNqAtk5umGXKogFLsNNbGsxsBPdk",
  "key3": "C5su7rfaoCMwQFUUqomaGNqQrrpY87mUigpv67Exag83Y52FZDhvkpsxEuCjUxaMND7FHQaW1dgjtahTMm4vEJw",
  "key4": "6VLWjAb3UNuvrAwRctginyFst89iTiDPbGjLnMLA2XLPWJoj85mRJ6NQpLKBoyuwVfK7d8Dvmd3YFsuFvJdkAQL",
  "key5": "2Dpu3MLHUo33SsBTGvvmZk4o9iu29aWLKzKreT1KkixLezYaNiKQCePEvimyZMD637mGXoiHZTZBuy15t72WY6re",
  "key6": "4cybfTkJRJjHkYf3x2feQRK4o5YTfvMzPCj3K6X6GjgpacBNiPMsvx5Fpk53tQnLdA98oY8XDc6J5VNAJoLAc1TD",
  "key7": "4SPM4ZpAWjTnZEBpSuejYaGDgFiGVQMXrJe5gsguxp2uVkBss8U227Xj4TbdsefacQKWgneRkRG7hAWuyFDEtEkS",
  "key8": "2ZXs5mWHoQXbVpMADtFyEd3ed3Di7fGYCJsYsa4Zz4DUXmU32hG66amDrd2RSJKrPPizQ38HNvcyizv7jNYy17Wv",
  "key9": "3qKSEJuzQZ4zj1HEGM6wNFr8BFMfXmMTVzL2wcCkhdV1jYSMva65KpbvTeuQYnYWrZjyHtu1XLigAM5TBpbjnyzw",
  "key10": "26MvqUgfxFJeMatm24XCG45WjzdfP7K2RDxv43R4Rshe9Aac191xTudDPC6rMyMLJisUBowq6EhTjwFKdSs5bpcK",
  "key11": "JnvJQtRxJ8FZoTp1Afi45hZrtiZefqueXy1xXZmKRAVt2VKkxrdQptHQVj6Q7Pt34Q7uLKwiKoZu3cFJ8aWkGiA",
  "key12": "JNAKeMS1NnG7KGx1RSUVtTaaF7ptwYgywnDXbia9j8mmeixHmTdmAafySTx3apuNtGvskxd7kjXeDbGqud3mfTp",
  "key13": "1LovqQnX2vNN9dnp8U7yK34tWSr5z56QYjAJj28oFvMe2dgzJzz2uuGu4KnTRJeRPfS4uhyCfWBg6xJTURPQ9F6",
  "key14": "4ufEKRM6odVkQNNgvAHhDxz4EYozvdwWsCc3bmZnKXCv7NDrBUREyMoebDUSgYpbquvd11YFZmup25RN8DVyMe19",
  "key15": "5CbQMthN8uSv6GNKMAszPoXxdK6Pzyt4taZ6mwZuzXWkXVt5gZ3fkhoEsvjShFNUdumGm4YLPCM1bsK9PAtjZCqc",
  "key16": "3jbuS2X8SdqnqWfJnDX1gxpmYcjiLtMDAe57nzKuvdZVYrpNVEZPz9dvTG7Md7d2VnP32vUe4AmJTxQXYzZDcNAH",
  "key17": "TRSeBdjJ4aHCYa4hc2tc9HZz1iJBFiPdnnDoX5GWoiqkAsyGXsiQtJMKTFQo1ncpfyt7MNEs4JCCziDw6axkpCJ",
  "key18": "5xbhy7Aw8Dh6tnVzz5iahDkpMNszYgvqLXHxdjT7HzAos4zByU8QT8T4W14aUWguoB9pVNGCxidC9n1rsb5L2Pfd",
  "key19": "4GjXE13agTar3ctFof6XJTUk6ftV7ZqBD62PZzyNJDQtp7MByhwRM3u18TAZGX7WRLKXfszFgv9CYRGjHYxfkR4f",
  "key20": "2E49mG2PuRMSdd1VjVQXnAXwQF1UNeMvDJ7mP6FfAWu8WkVwP5mivEFyc2wXP9SMAVG8M9J4fuh5AguZR4GaiXaG",
  "key21": "64jsuEraxYZ2nq9Ksz2wNqLrNoXd1TTc6PUAtDjkXCq5qVxCyojYr5vRaUz7wJB6BdezwgMtQnt9K8RtnWxVoL2m",
  "key22": "fdLBi81kpGCKseUkHYHVfqUs2dGDCkj3DvhUC8sCpoDq1VzefS5jKbUxgZAAMA6SCceYY299wKbjC5AAm25SEez",
  "key23": "2qYdvktWz6tbpQw4N9pNffkANDRjNBgm5nAyDTmu3x2oupCpwuZ4uWEfV8aAKc3qt6oMNoZ8WnboohbbwrbP1fza",
  "key24": "2MbaaLL13ZH6FiTKRWMPMpih3CZYYpYSo8UHASAKjBeqtaMuUWWSpxHkroUUG7J8ZShkcXbV8AqShqFejqMXbTLq",
  "key25": "4vRFMRt12UQW8sDTG1MHnjujFNCBArXEUTPMFpn5WxRxPVFEbiBpAeNAjY1JdQMQuAxRCPzQE4jRWZ9brVBwBQN1",
  "key26": "5jBx86ZM9DdpWK97i99SNLJc4z3au7MBEYyVQ1F1Phjc5vt1DXKtAomzEeR3SBjZGWo5Eodt97nLHjWREMiox1oN",
  "key27": "rmcyXP1wYkzq89szgC5K97H1Vv58QuvFrn2h8Thg1hHUN7BL8diB3WuwKmPbJbGmDhsQFioVF7Q51GiVfzn7zYv"
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
