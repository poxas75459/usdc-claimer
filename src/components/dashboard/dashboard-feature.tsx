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
    "dj48usDYGE8em6WNgDZths9Z3Yn3NewN3APPEkytFDz7c4oF8N83bpC6NqPvitTRUJ1ZVbC75STckkUVaDeTr8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64uTf2BxY7cQzLWWBWWswQKkPAV4YZ8fNz7YCQ5YYS73wgXWMgDXQ8uumw2ZHBUyFUU8Sf2MtyZUx32xvoS8gcbG",
  "key1": "2R1RUGpPvTNuTX6QaFcJreAVHVJ2Zv1jfJjsvqb7MiWrTMTWUsnQf83tWFTWwhrgQgovr8yi3Xy19s31tT5ogk6s",
  "key2": "4WZfs9XpbLgZJR3422CVKEpEeGgYw77awwSN1yfdsdrqSDCgNbCXraciQCpC4cS3KSPDRBqXMzHgty94oYF73QbS",
  "key3": "2tZo6Hmy6Lh9kbAnWdSjoPohq5PRiaRLbhf8rQNVg88FHDHaNihFWw58UjoF8HdVN39Axu8vuBV3QLRaLt6mP5AT",
  "key4": "4Qsq543gwwVdVuWuHXAayte2Uc1NKXgvNoKxTGToiY3yVP8tvQDnS25gp4PBBs6gTtGJwkw3FRWxmKK5fwigHsLd",
  "key5": "38Eg4Bd9JUpxYk8FjLtweRJ3o3XkS7UW6vcSD7HjsQJASZecgSnPvcDgxF341kyYPTy17uvq8bdXyhtvWbSnnQuZ",
  "key6": "3Spb6gv2MVLHNqGcrQuhH5XiCdQQZgdbpB9k3tK6ZWZRhTJSRtk7k9u9bR9rkDKmp4SmNF4ZaurzpDCovPfhdaA8",
  "key7": "2d7qCt1SwjDmm4RoU5hBT8iJib3oPNvbHoYQQUvyPE5EH211aT7mP5SCxqUp4Ud9vksR7RS5w9xWuHWFv9ckRJi7",
  "key8": "5GHX19MhFG9zcDbVSVMAEQTrE35ZHP5CkgUymizU288fde19Xwb5eQqGtTN27AMKZrDK1YQJH4bWbLqaP5xPPybo",
  "key9": "3av58EVjDHgpuH22QJUyU3fd8gMCtF4BTFxXjnLXCijA8hFqDbQejNVMFbo9SDL1GLmvRemELFtV75asa8zfJ4FG",
  "key10": "SWMCEg5sPMnvx5Z2i53zATePhH9euC426oYntas4me19UdEPydqeFe7ima2oooaB8Fx9UwNWmMT3pVy2zaKe72e",
  "key11": "2ZA7LreEhqB7i1sZXXGCWVfPX1xSDF11EH2Q5U4xWbaAfx6wcH3aezrp38Af4xLufGqD3Qrhv42ajRcpfGXttzkW",
  "key12": "uze9U2GxLJDPb5vbn88sGE9uLfngFTcomqZ3cbZMNF5vb9AKwpLoxJU8K4wgeK765vBk2ZPCENp1XDQcmGrHcER",
  "key13": "5exT1ZNNJPknJVh42745RV21tuzxfNcR3zoPXRhY3wVduvLwiq3a9cMUCppYiwuU5br7sNYHpDNAsehs3UWaMbfo",
  "key14": "5uBZuXTDQ8zwPqFs64v9qoXcdi7Wp8qSuE9PbjNC7UxxN35E24gxHCD3z7EyfqMdLdBQVzBegrWr5c1t52EZZym5",
  "key15": "4Nm1tyJLF3NxamEiBfxJinMu2Egh5oBMBejR4yNdyxDKgeJKudMHZkUVxfNXkqSkp9iJHfh1czKS9aRRaJiytv3C",
  "key16": "5DP2cGe1y5o98qSqyf6Z9cTByS5rZ5bcfLDHqpVXGAxhMVmQ5Hq2g8XPMaFyVkXSfbtVAJXVHxsZnmtWwChFzt8Y",
  "key17": "4bix6yN19waT84KNfKqd1h58HboovYy2MWv2W7DEkyArFiKdLCnbkTtvBmYroXYa6BpPynfPV3KaVmqQNsXweP1o",
  "key18": "45ea1XRWebsGyMWT5HpaLYfWx1AvgAquEFCkmG9H2ELx1VnvGuGyyAwsZmCg2SKzk6TKQWmusugCWYxWdLuqwByd",
  "key19": "4H1zHG5HsvHa2f5uhhF472SLciJCQ3MJXMUFARA3nfVrBy9z1dhCVCDN3sEcfvDKzYHwQwmCSmK6ZQ24Gm28H5UM",
  "key20": "2BnDMWx3uhrALHMZ1HjyVrJgfuiBh9UxsdXkxC4MnAGpZPnQ3WQQUmj2LDJr2J7yuGvdJDYmBx5dXQiWPkQzA4yh",
  "key21": "4hGv8JgeYoxBGdTsWo2E7WoxFVGwjPVzLwKahkUQBVTNazAHEbmhygmQASeqq8AFbFxQ74HL4b5cqetjhz7ffiiE",
  "key22": "646UMmmmiaukXk4xujE1BDzeSNs1mpSWncjC59NpwZaUGC1bZiJCJKbNEcokRnK1xAjdYWoLDchYhH7rCqfDJzHT",
  "key23": "iSTVZPPTxVpXZtESgLf6fihopo9WHMzXeed62qwzEnb1e9rZ1qZPmZahpbtsECczmk6VYhw2A2cFQip98N3u5ov",
  "key24": "2Qp7p6gozLZJpY8UeG9sike3cgbM3osgyDeTiUEyBdtDw8xf1xi8mteTpfpbRTdLi3tPLLMMqqKaag27rC5mV2rP",
  "key25": "2F48RX4m9Eh5kJ5kSD7PX8FAGRsJfUCMC3wCVkHwZUySUQXUmj29JxHFrJCPduVwVhRENLwFt91vUyA6wgJSCdt4",
  "key26": "ZCQTNDjRN1w7vgbFwe2KkbDGtV1xMEhmzVw88qnghBQgVuL8NTtAik66CaFYjvYurrbweKpGCWTmvaW7JErrwcW",
  "key27": "DRvp1akmH2YG6YRyE4Bscn4Q3K4cR28gme2146FnCsReKscHvrUCQ8P97YUr6H56rUQ6umBJiTskmcnuWBJCNSR",
  "key28": "3evK53XEqeXEXnVWYjFsNsaxMJcC1LrBVQojc3q7kwdDH1rGVDxfWnZyLYp7YcHe8Ky2SzdgFpiJD4PByPrZoGiZ",
  "key29": "d7GQhsZ7mmk7vr7nzVopCfVTXXS3ifRzokKGJhRGGw4u2wZJMKfa7n1H91vL8qETcLniYko6GvYSQeqc8YvSFLK"
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
