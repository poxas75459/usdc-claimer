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
    "2PTc87fbKCUzNVv57yqJ9bzXfXmK5MPS9RPtdjervERRuqKWtobschm1B3SAdYXm45cTXgNS9znJCuYyC494gpYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L8quzm2ecumwNwyjQTYrBx2noaig29VUq4mokPP6c6ATuwk8MYjXzC1Tc7FwW2oxNTJBWcRNKjoiUQt8mpjgh9f",
  "key1": "4djAfBNqB4SocBnPzstVwTq3mGog5fc2MCjcCVv6UPsbRgBy7F43rssyqn2ezej2nzRfHJfDdEoiyKtk9zbyyAjA",
  "key2": "2mmVuGDyLU2njsUcbqBg4jjoZKShC2Q8EzVhF7pwDNb7cZc75xcHKR48aRvoogoz7GRGrgPNwgDRZajXdT9zQdxi",
  "key3": "2nXf27jDhvvY5WQNb6n6zyQV9evPU8Ln23Tw9Wz2ADbFj6R4YtLZedLdwF3V43VFXLqfyynpEuafpgYMunMwgMbp",
  "key4": "3dtdg37azZbq3fLGiku4mHa8adMmqubEcAGcSKzUaM8ubiwmomN4rLZJZ24yhgyBNhW4KKW5N3bm8Po1ohHEdfL7",
  "key5": "2BHaenfFPsNTrNPLPWQE7StbWHZZHAg8yGQGVhBQhkmx1W8bnG6ygcNJ6mKZ55yvQhrM3w2y78zaJND77kDMBt6m",
  "key6": "2fz5jVeCgr2FXoJuqTy9X1hozXwn1vhfQaEkVDPaAeHpXAeJd5ZACadEJLK1tDqRQo5Se3fqyiXQ23PhgT9o8pCu",
  "key7": "SxWhU6qrQHpscu725CaH4fcTD7Wf4JQaWZP7fvJ9VnbwevKj24zaDKRjXWgXAsW5RLKDWKXQTijL1wZBg4jVW5o",
  "key8": "4SLBGV13yqBpZL8W67LuvyKhAgEju9YTp4Q88DsJQJko6AL8zxUsNhTJtVDJvmAK3enEtNGD7p7daNkRwq6G36xF",
  "key9": "3GES557yUoo5RpmpjdRQxMakvPMwRaMFd3vQyQDTBb4tvjph3GUisMDFM4bs8xQiybM4u1DaeXptoan1rNdikEDE",
  "key10": "3VrDfCGe4jB13zsqdrnrWaww3VfvfMFdbK8g4odhyd7zNbHEaMzLNSUVfQKTEKcxvxx9v3sgt8Gb93W8eSXNHuuR",
  "key11": "2iuj7FMC1i4HH4CFPoWHeinr4k7H6B4WYcqLRbphXp9e6zab4S7NKf9FSbg6EUMWNWtUy2WWdgSuT3tGVxmkGKFv",
  "key12": "4x4uWJ8xQsiTdeMxFRHKrVF9QCtSF5rVW5SFSHUJrxg4oGPFTMKBS3UYm4fFvxTom5KPQ6WJ3wDCkqLJnUT1wznu",
  "key13": "23b71BWrU7AfPh3xGguGW4DhH63632JC8zCggRj22fVDT91jMh1iKF1PScCD64sb8pKYP7T6PCuNhGg2s6mXzSFM",
  "key14": "5aAWtXdf98QeNoJYspR6EpEcfqjx7BbpNuKDCjSpTvvX3AukXT1AGQwHaY1L8rwbJXGD1hBxAnWLjubuZY3SDa9j",
  "key15": "4NFSb3iJ3Wx3Qg8QLpswzTiZbiDkHd7VwTiDxSBvn11Fb9ykP19NhqVxJ8vfmjTVE9huSozV68YMbhdzue86WVwS",
  "key16": "2m9yx1Wiwr3Nvu5wfvhhn6dq6inenLhgu2RYWc8173RP7Be7J9hh2Sk6U43u8MbzvuFvffJwmKkrhWA2LFP8qz1v",
  "key17": "3GgaQ5CW8FnnZHgTtsf73Ky5PGyQ7SDQgXEYSRUSFti256xxeDVozVdrDqFdNBfRMuJwx3NrePW9E4frZXbFKP1b",
  "key18": "4cjSj7EsGvsTEAroTRGNjzpkcc3woguBEQgWCDuA4Y2pFhiyMc3C93RfHW2tXyu31N5n9piqyuuAztvUNXsJ1gEW",
  "key19": "5g3Ca4R1acZiU8wcvhziAPXHPzorWdVvDPLnRXDfu4JdkD2AXCQbjQAMfkr5eXYKknWwbjWugwJ8DfaVxC92ni8t",
  "key20": "2CFP49T45Xq5Mo5by6X5iLHtybqmNPLLtmzyEr5gmjhXShhxGyeDJRPFdz13vBTTcRxtsnMRE5RmBWVDcDfBDED4",
  "key21": "TGFC4uoDfhLygdrWZt5BgN3HTDjJwixt4EUcuWR33khn1D9911JK3vdL5WLotbCnea3GvnQxBbVbiSdBjMePsz3",
  "key22": "2EpbHMdNvdoiTmWroLV7Aq3EK1jpMpo9KUKV8seam5hLmU6dvp9EUqRFYPy4umDSu4NYYQeQBdqKmccys8ApRKie",
  "key23": "5GCjRi4ioBKFZVR8HP9icLhUG8aYxrMRQMkHYD3VgF1PTdsTcrtHUcqdGSWXNRwPmBYXgjUoxT9q7w7BFMp6HRZ6",
  "key24": "5vNLLCFvE47ybqNanejHNBAqniWrhoaWypNMTSe91HLtdFSf4Sv1LmEKEvtuEda9yJTTZfu9o1EDBujkfcZipXAg",
  "key25": "1roJ1kvUjAmgaAzVYHGxpatNj9bVpnUYqPQygNC9eshCcamhMpStkTSaKb7KbHJeXUdM77MWPoSDeuUX3eDh9pT",
  "key26": "32vCe7XW6Q55qCxshwThNphVtjkVXMXvEcCTVDVgPHVHxaLzGrPSXBE7DG7irpoPumi4HsMsd1R5RhLScKQtXLbP",
  "key27": "5QhvZzTJzaXKotqUQkTBYHESeYQpdEuJWGAzjJLzwTsRjNzvEKdC4SC1JKvNn8fjuFmZBcadtPrUxUqTNTyueJrB",
  "key28": "5DvvqusTnzbeiT4rsZxfrLYjUeAcnmiGE92ifBLGwdXnPGi72vUw81bAroZnKirowunT2EUWRXDPFmGvW3JBmoGT",
  "key29": "5pW3TQrP36kimJ5L88Z9kkNo2HUKjKZYji3Z3de1CudaDYVzFNXbtMUHZUmrhDrjrmyGPPJ3sdT24JyZznuf3qhW",
  "key30": "5QAjxtbK2WkwsbttsjfKD5QVBa4zqSNsCMxtosmBD6NJUy6FiycS14KeUcJY21Y2k7mk2KRV61rSfQASrWkMtC6D",
  "key31": "2Rbwk1sE7wW9VGAKZuTrKbbSW4r5YUiYCRFUNrhAqx9keu3fMwJY3rW7otkP41huxs69vrNWtqCk24HJgbH66sEH"
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
