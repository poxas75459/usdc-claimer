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
    "3MG48cKtwQCX39xsw16egk7AnpjcyJPfPZartR82UuGyrTGAjhyjFt3SbmJhaqyNZ8w9n8o69tqVjYhdi919yNd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TyfsecZeLAxcaxHCgJ2jNJCBvLadpEMZzi6P726QtnxpcG3WhhgogKonYTDAYBnNxbCU1aGW1Y23nPJmYSQcrag",
  "key1": "3yENQ9A7gTS5T9xYJ1X7EhSCJJz9J2YLtZvrKFmXRVwzNEAHHdE6Jy1Fn1bwfSct1WCry1NX6mRcqbn5Z8L5Hqog",
  "key2": "2wB9cyniiR95uyy2vcGx9SzE5DsD5UKhBqwA6fXR8DjeVvjm4mo2VyXedLhjdARCqzcP66DSzKxVCx8hkT8hB8Ee",
  "key3": "5VX2n5PWzMvp6n7jezvnykC3hET37eFcBp2xvUtPrKgtMCNhgGMWLMGiPiL2zRo6uqPu4waaMoXWL3czmteh8W1F",
  "key4": "DDSbcmZQt3wFVJjLHiGHDWPC7TXX4pUK9yqgPvyGF4oUU1Br9hG2vYRD8bRsEoJLyrm69FBq15KVepSSvLdK5b1",
  "key5": "5cD98bfVDw6GyovfArBCqRR25mSf7RujKHQaArnj3PqJUkH3fTj7d5SMcbLnWsZKZdn8iWRFJHDwkTZX1brTj6to",
  "key6": "4H8idK2JXT3Km8cULuRDkXXPt58LdWat7pocKLB12ALtXAJp9BtWwQY618xTfm8Z16f3S8YqYz3enRdfho8Ya1Zw",
  "key7": "y9erDPSw3SGBXNMRW7NNyqQXDoAJaJ5bVLqBmvUhFVowNG2pZoFFfRNBhhqE9o4Bcj2DdW3JbN9JXewjsicymAP",
  "key8": "2ycquB6Z4by7Hcj8WZ3XWLBGZpdYNMWxuyMwZVGNPvQRUwdJynkpqXT4vDyic6miEQCQDxysmEpSMousC3LXX7We",
  "key9": "C8ro9mpKTCT5Tvqx4KFNjeWJtcZaRGj9MPH15sBAuZuZntm5NM2wJ8P9QkR4Ut7KHDfZHnAFKvu5X9Pwhm7veVT",
  "key10": "5AAbBmJK4Ur1ozeJyMH194yTaD3LC7XzDh6WWWtXw9bq7v4rxwG8o8mrrdEdChcnZiyQjjLBq9URuGMr7NjhSAi4",
  "key11": "3tQ79fRPpTUb3MbTr2nDukn3Y1TFgW2GsGikTnKxfEE3iYkYaq3SVVLJGvJXJ4X1PRxgr6fmbShMKEvCrLcuLYv9",
  "key12": "2AnDGSu181T9rJ4crmaLKmYZ2ZWqMPxo4gZtGHC3UA1ucXRHv87Da4rpSRQxVSvL6W4R2riULrnz3AcpNLsvwYUw",
  "key13": "5mvhBbZnyWWPLoPGi4zCqXkpCRadB2g3K26YrqLrJ8wK35zvTyuZHUmWLK6K8LHcvSmiuUANNXJKy9vDL5uKTT4H",
  "key14": "66uMwGWbBA3k5UJAN4yfZuo8HQbytGTF4s3KP83RSFcpSigSwohgUHBcyYz9dyPsEMSpBsSiSiLigUojCtxhYuXG",
  "key15": "4se5pJk31cioHQqB9KspLNFL3wXGZVLM63fZUpbFJ944Xg4zCvN2vSDAAdvbg9uc58mkg713W2v7zVnTRRSHqKHi",
  "key16": "2mviGsZpkdbQwUZUveS1divheCHBxEEkFiuiyMmo5HXA34oUXoW9CxbgnQpRJqLGbgoy7zNFvxMEAsFhmrfXLSm3",
  "key17": "2fArfoGskPFu3Y7kadSvtz9w6P8dFiHbgHoMyydQrD6Wvhv7rk3LN74ZGisSid1GHip9T2nrtNnURFaWUpDrd1Ko",
  "key18": "ieFWouH5UJVtqzR5GFPdsrtubiBirv7QGJe7zqcBwza3FKtwvzdEJea6iBrBZGC1yZd45AafKuNTGXJ3NQiUqDC",
  "key19": "2mGm3MsN9NeTtuHDG1JfJMp3zWysN8GPrunTJQnekV4p7hyNFKRQpi7vXyn7GA5pkpkZyrwi8p7wuT8XxtbMstEq",
  "key20": "2ALFD14R27RJ1Rwp6hPdZQzY3wtwsUSChxnzLwUE5sMEaoNmpMeP95CazwoXu8k9ZcxSwBRbw312K3LZfgVUFghg",
  "key21": "4ZRmP3p8SKJuVM8gsLUCkYJw6bCnA2YbfWA2UEUeEMa2NCHSfN8v3z9n2KfzDT21FFZ2iQ3CLsNmNPLkqFsF9Uzt",
  "key22": "3rFGQRhnoDk4CWgweq85AJPw6krTX1kS6XsTfmsmMpmv1ryQmNpnPM9Uvbg1GDUscZ4WzHn4UktkGSQw2huixMo",
  "key23": "4Ztk8Uq8DHC6Vj4c6n9Cw2USdsyQ26mifPEazNgzuYXssCHhd9vhmzFHYYooZiYkh8a1sR2enjcqiWeHTTU6nDZk",
  "key24": "4Fj6gxt9JssmxXGePfs3VxY7x4WwTTkaihgRZC9k5yiYKJd4TcKCkMFJh5bwmg7QgDn9yghod2tKY59NWVGqGnAw",
  "key25": "4Qjsz9iePCpnDWmYHtVSYV4a4r8EgyLGiqcAdC6we6atLCA1kPXmmuNFDX2d3t17LMBFFPkiRcNvdqeA7VnMXxho",
  "key26": "4bn5GsMpYZu612ws7oxTsrEzab4KcPPDY8SGYjCKDX6Dmt9tfMwXeR5bmuks5ULMXA4mbi54Ap6sZh5gB3oWniDa",
  "key27": "5shJeG9EGX2zGb9oB5yLAUsNBoppwrwBEhFwBFuf5DRZpdPVjVdg9vzAbbU3MZREsYuypgKwjt3FryxL9ymyzXDw",
  "key28": "Wz79Y6eb6fuL2FkiMe6GU9Ny8XsZQhSjV9USntwgcphhC2d6R6tjQtThwUkGW4fpU2jAoTgZe3FhjzrY8v4UGw1",
  "key29": "2HCaRL4bWgRmRKjDGTM1SwjC2TzKyWGdY6Wrxtdp2ELpUoc1bixdGzMQmNJH3wucVzQzsLqAPrJahsbhV6qM8eRf",
  "key30": "3GyMdkjr4AWNEpQL5hPi7LPvJ9hGzu36dVpfsjMbvyp5PWqdAMrQbxYANPPHBrwaC4oLS48pMUHvu9hxEFYZ8xzg",
  "key31": "41wSVBgGesU8p9ZU8VLUeZWeBFiqd6GB9NVXiGSQSoLqcGVqpiaPuXNXcGgc7efWwcGosh24GDyQfHkdetMQH8eK",
  "key32": "3TgrPX97w6rJoQKkWBjhbNC1fzdHg9uam8qPcZW5UfXNRPZLnCscP9FERVv8hEiGFbXTLRS3qNMPT3EcnWyLw9AH",
  "key33": "Rsf6ouqbpbb6o67mM5MNtBWEWVrg3xJSrNnzU5ShZjTzGJEey4PtVpdLNkcS3HjdbcgJqACdWmFP8ZnPteRsKZv"
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
