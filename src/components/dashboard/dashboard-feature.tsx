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
    "HTdFxjK9BNvhRcLCCgitkr3nTFQTaosTmDYheZ6zUe8NXGeeoAgRC9JPv3d7QZUYNx6PNHkJ6YidoehH9yreDSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57af1qg1L3BoHeLhkfXMeiaVW99YazMmYiokm6LFnhhJbveH7wTmmKReqmKYFTZT3eHGRr4ztADBvMeYN7v56mG7",
  "key1": "5Pr1W6cmzg6K7xgeBihxEgYfFvV72H5Q3sNspdNoMiNtA6tJXvM5bnTLaZvcgy35YT2wPTsehFtUcUvZYffNN9y6",
  "key2": "21yPTei8ujVMVEnkJwutyxgaQcCwoezqa1EdASNTTZqTHJ1jKUHaYygeWVHRFgszhY4gnCaxWSnnHNeEAyUHZjpc",
  "key3": "4xS9PzCsvDXkwV3zKt692Moqm6fJLqFGC6upJq59Yf31JeKBVz1itYpF6p51FRW9PitfxsqDKqc4QmJycfRCW5My",
  "key4": "4RyFsCKRHiTGnkZfc6n49C3oXX28k7AfN5F63qT2xvo5N6LPSg17x71RhqsVygv3nFPHkqiCD6wwrm9aG4EcPCKJ",
  "key5": "3NWW62isn3SPyKGcgrrU7LJzNwkPkAGF52eACaowRLLX6RtZmNLNApoeXdTnT78v5yqo3XpHY7zD8Y3UNxUrgg1Z",
  "key6": "2f5KyBKgMqXpiFa22mRwbQ7hvcZ99tbUKqgcXAUz29AsTvNgokAfZ6yDt2p4Zi8dQPP8PLM4un1NQVemVt4kiECx",
  "key7": "5aDzYasFSUqsFm7gvZxQW3stxB98PDyMEUPD572Sym1roB9aXeCKCFugzYQox1RM7gcGLZHfggkUx99Jk7eR4Hrf",
  "key8": "MC6RnVksxWX5Xv6w9g7o4KyPATs3uoNphjHLcEPUFFei17KSMWjGdGE1YVu1LAz3D1KjwMgNshUNEB25L3L5mcj",
  "key9": "4R6x5qbEQDWTaFzzLtUciVzGfh8w3HxKLNfk5g7GyNEDnaaDthZmKXFbEATe98kFZq9aQQ9cnNQSX1kRa4EGkHyj",
  "key10": "5NWksUpYAjHorTS4epcPuEteHnx6ED91qPVXv64YdBFFj4GK1d4mVPdKmpc6TS4Jc2wGm4oxYq1SNWHwfUDiqAz4",
  "key11": "3h3XguMjGaoUcxnoR8fTAh3SY9DwwUnrVe7TLU6GrcaG8f9HYSCMp6fjS1CwJLccmxcqB5cNa5agr28ga2oVVh8k",
  "key12": "4ZDSc9uo9kNXyS7PtttFbsse3u9UUt7K4HVb6AgAvfc8KUKUTQkjimzsD5LS4AehukS5xZc26h4XWieQQbzTJe4c",
  "key13": "2etTyDjkxNdMHNrmyQHupvokRbN9YGZSQjsawVUbioPWgZ6BsZXxKFSoCcSRWoyMZx4wkg2n4x6bFwcCjqWsT9rQ",
  "key14": "3UDNbim5wCKTeBiNTdKoZSUfRUNZHJTpt5Ubyi9rCpeqDZpXdDK8khpPtifo4gemW7Ggq6iJD4k8G76GRVzWYfTH",
  "key15": "3XCMEai3CVEGPgVynpxhx1Xc6G85oAipkRZhjoP5tEWYsiGd4bwyUKiwPGzTz1qpJbkJWSmRp484Uh7CeDBvoBES",
  "key16": "2eafTVakRTXtHZt4pPLvzLHUMhVZUPtJCDwYvkEu5VEuzNAzXA2TXV7ipQnQoKcfuU3e9TqLy1Fpaxi4Tdu8utVh",
  "key17": "22u7vsUtTYhNWruD6WSstwpkgb4WcZs81gthAMYuwBDbfdtmWvnGkBG31N7h5BCW2UXW8dczsRYUfJvf5Szeq8BJ",
  "key18": "4nmGemTxvADUEoR8XaCs1mQdV6WmAggp25Ssb6oDs4g8zdA8z4Q6gjntzL9i1J1k2YuyYERxh8M2xiBdQHe6WDoB",
  "key19": "378ymPw7NuE8pAfWfYHqx5ZWQKc9o1WEFG3HDJPXo6xooX52eyHUshbHKewKXGKGob8yQFLWEEhbuHTwnodhbMv",
  "key20": "3HfbofA4eKcySZzP1jxSLPEaFLzPeXWEzxAggVkwNp6HgPKWCHuHEa5LBUTDwHDo5sBosG8kn6avtxeAqpLsSqhn",
  "key21": "3MrViM7FtWw7TfBT11gj25kykoPY5PR9d4TNCadHpYrDSJPUkLF8LVJyUUwhCYmcFakCaB8A8sYezfo874Kn1u1D",
  "key22": "4YK8mHDs9w7Kbkvhq5AesKPfp1d1uQG6sG4dsyG8ziXygaYYP6EetNvwQ2oXQFTavWp3xnLdHpy1dq7bgJV9iYeF",
  "key23": "2hF9J1oc46vBpkc389eK1XFrkbEXy9GNfMu3sikzRvnYJE87FNBeJKeVPRvkDWkPv4EnyupmHGcdpEh2BS6MwgUC",
  "key24": "2RRbcQ1U3m4teEGNXvYx46zyMSJbYTjCfU7gR96byTM2GDBTeGeoN8qChkbn7DXbtiZsvmsY319kZPnmJQUm3VKB",
  "key25": "2SkGsRqV9sTQ7otajdLFXbqPTLpXuSZFBvBWesxn5Sd9AGm8EAPJsSYmMQR8BMYneWnt4e7Cj1ckfNS24KTFVHTr",
  "key26": "2nesNntxdE3MNtgAM8h7pPmXT9VxvzmYGYkevAGE1eHPVACwXnHsFGQJo2jzZFqyzgS7CgzCxmtunfpNdzG71sJk",
  "key27": "M9UFSwXngz7WM2DUq6YvVujvopie4FFEEn9jxWeFfB7m5fB1VnpqoS8AcHnb9eKxnUeAThfX5RdezjtnUFCHzhB",
  "key28": "zitntFzLCvYiwptEo7ryFiHPq1VHx3Wc3V53CniQL67T1LUWvqpU8UbRfuDiVijYR1Vf6BMFLx2FoJb5w86AH1S",
  "key29": "2eJ4uFdabJMFgniXCaRS4FL9hcDTWQjXRW4DYcEJX1Nkdo1asCkvfn5Mw96GbXZ4NUxujs14QRqokS2J1PGGy7Ms",
  "key30": "2wi4EmzXAmBmoqHz4PSzLeUD9152cDWMB18hBtENdi5EmPagBEcASUQxc6tAQfMSh1Xt5qBVXbFMGg9LmT9HQhH",
  "key31": "2oEcovcuJB2v92zC4xYGPcLu72LYBF7V5HtDa1kDQiu1PH2ooW5ve5ofceUGAzjcWQByU7S3jK9jK1Bt9cMvtCnV",
  "key32": "5UAZfJgnqxnaAo1cZCdAmes175DRHp9JpRWLzBJNxMhioJQTtjSqkpHq2hooVYb5LhRGm8bZT6z9HFGt8vnVwAMx",
  "key33": "2yT6YYG3W7aEmvMRpVfX4vgBgEzUNACBceXfpwiwhFgTopcpyJwGTA7fKLQHXk3x1LNpFD9rSmVsJTKBHnsXA8zt",
  "key34": "5dtbinUbZtFUSiUCfeMvoVrRYUrerP1pi9Q81g3D9Nx8TR9rKabtSAW7ZBsKhYCmjbCNMKZEjr6EUgZcxUY3Us9n",
  "key35": "3hjQRdtRpyJWTVDbjmcEK7BgfgPMZRbcr4i4MUZNcRyE4SRdXcKcNh6aa5jWUU6GZKLrGxZJSKQE9L9JdeVZtXx",
  "key36": "3ANsHD5bK6o7KnhuAe6ixUJxhVEYPsPoJSfHMKKVojfFiaLKSB5MyKST55pp8fZjByBN7T2Kme1deo5R2DgYRoMD",
  "key37": "3K392FZTbUH3RFCoNdFDBKCZGxxQqYDtfP9KDVFA78t4vgxxNU3SFMCsn4PosYQtf14dcBEJNtfiWJbYmwZyAQdK",
  "key38": "2p3TmV9Zfd2S77wTkmS5NStNcWN3wD5nNrLkCAb1GKLzouwnXTP997meXLpEVNTtsokKnvFS84DLLKznudc9zzm",
  "key39": "3ouWqS4SQf41Q1sEM2pe1FADbDQcSFk2tRKSesZwd8ypfhZW2oTZ7JhZUCBvUWrXwPRJm2rwWfekFJP6Dv4SxhQ8",
  "key40": "3NhLurR8wyfKssLM9JQXJaKsTURRwwpcKR8BSbPw2Hoz6vnXCzDCzTy7YxLyyLt5TSAhbG9avf8MJWG2Wymxpgoo",
  "key41": "61K27iQLgPaPF7TFsJwWDrfunNZ7RhHKY4i63AgaK14xeBBmXbL8iYamKhY9hawxvxt9Do3TsvCLHRrVXH4KHcfo",
  "key42": "2ZDT9yUnwA6EjDLJUG8atyU1Bh3uPN8KXedDcPGmcuDx7uKYo6rbuZzkbg6B8E7bjma7LjAL8U7yPwbopi3tfUqy",
  "key43": "58BBVTRSXUscQDoGog114fkVNe7eEwsz6En6L8Ev72WD2ThUdEz9j9w3fV7oeTMNvaJtR3jpZYNj6zWt226msT5q",
  "key44": "24gXt8ekYWpDVNoJMV2dTWF7vcmiPN9e6to6dkWDcwdxQSvrWQNPKDqE8tCgM4J5iT9p8dKPrfhU2w6UhGW15qnF"
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
