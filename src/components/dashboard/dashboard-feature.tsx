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
    "42tpy9FKZGo9dWCPeUFgNjVfhmp1Vxkbhydm6v1DLUvzVyk2P4Rw6WYrUvnx3awJ9TGGuyhUaz6yrvhokyBDL8rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5wCNdbDTU4LkkYT2kbmmDvk5qKpaZMWjaiSGzVDvSwYVKkEBEHtZqW7THahiJjSfzeoAk5VVbSWUT5NckRFyih",
  "key1": "5wfTusUgfFNGao5wANkhU2P6dYhXYBnqZtWQ6D4J5xUsx9YBUoaCzKSc193a779qk8p8bp2YZxmrKwpHyQLN8mFp",
  "key2": "HSoR77nnK2mxhpcwbKaiy5noYeKamc3YCuHEUqQtNUSwKLWjvJdZ6gwjrJyVraGhbhJiv7UWxc2QVSAdzBpTDRc",
  "key3": "5gvSW8rZLoP1Dt7Lnbr9W7mi3SkmkDjXxbryjxvY4r6Kw9s79D3FRQPQhyrQDXNUtFAiC8TB7fC249xsGk91jTwH",
  "key4": "3fKYj86oBUK5VpWqGwSkU3HC3eDQCfS9bgE1cZ6oAKqu3ewij6wNLLcsQrtQGqmbqbcM9TaoNzy5DjVsfSX5qiQw",
  "key5": "5sFyJrAPXvVpi1Qc1tdQFhqywKBPr64twFZfrwXNSk3auVdqXiLXiVNX3Zz9JRcBHVUcJjnGERzneUgWS2B8Tgj",
  "key6": "QPZgEjfxCpibTvzUS9nsotq5gYQgcVWCavEiB7gFk3JB1q8xbXS4YS9a1kbs8r6G6f1wqFvSLosSQimfXQ9pKXx",
  "key7": "29pRfz5sG8FtvToeHiYCxdjEux4aYKGEdBkE8LdmZiYwPUCFbmauJ9ePrmtZ5kif24PN6ojBzCJjGBKCH6h6niMG",
  "key8": "33J1t9RpCUvA8843JS3DPgBkNkzTU1woCF668oGJqFriCRFoKewpQMvxUebmR1xxD8oMVUmDQgFNeEE3vfyEYnZ1",
  "key9": "55p6aUpsju66tZuudRhdWRZfhNUDr1N6DorQR2sAscmoajG9HLBJXENdL327uU4wqwywABLUUZfaoPtBNVGGn5CH",
  "key10": "58L3CP9BuWWPN3qEbcCmCaFJW5v8GdKcFhVPfGE5hL5n9WGXPG43ANL6JpGeaSdAzorLS1RHVFVzUykphqEPw4Sk",
  "key11": "5VYt1YAW6Yf6JaVSGbUCbj8PyRYh5gS7P8wfS3fT3DhV93k2pNNuSiFvRWD7mxgPauAfwGwY4spLTankjYYVRGqH",
  "key12": "25oRo1hhsd4Lnft8u4CCTPoQK83wuzo2b9hecveLJdoFBK3VETZKVgpkyh2S6s6bKQ31w3Nu5QPY9JBNdL1oNrxc",
  "key13": "4VnTMi7WFQtaEByUTGzFioCN7pttFZs93ss29owWEhw2bzDdxv3MPE1CeW6JmfWdvaSwhiCXVnVxvXTbEPMZZqeX",
  "key14": "fRXLSFkz6PUmDFZa1GQqHuwKhdhB7FhVV5cBAuq37oQJ8DcfBQUtg5YHdgwPuV9JmpsKBFkTKrtHVy2zazBixxV",
  "key15": "2XjbFeF2XnzzTrp56zy6rUzzaojbPsfgkBZdBpH31bamuHXHEcoEnJALLG22wqYmKjMbMQxcdkq3JeW1unytiJkg",
  "key16": "4kjdJY6a3xJUS8Qy2AprhgvpeV5zvuaqn3tVhNSEi2LphP7j2Bd3vbdAQLXujsLDb68krnBX2kWt9cB2LAtX7q35",
  "key17": "41HEatXLi7rifAHtzPzN7CeEWRrkRBPNAAYqbPDYKFgHzY5GHsCTWDr32L98GAXKtdE2ieUV61U45ar9SgGKyttJ",
  "key18": "3VwLJKj582emNbgK2cwRGKw3pRXkSpMwpifgcHr3Fk7JNuS46HgkMitA2ybYgfxon9RXCejswNW2jDNC51H7huU1",
  "key19": "4UqYyydtseirTTDnM5SECPgUgARHzM1ZRTdVSnJztTu1ZRmq2bSrzPYbKoFZ9SUK1d5UCXoiYYZ2Pdshh6gVKUNz",
  "key20": "45JbxLoBgkp8JtGYk4WLeFgcxxKzMyvgt2GmosBz2pAJTsUxsQWz3V2vyDFgZs9Mm8GmK1tHmWP2YfbF4Spp3M1i",
  "key21": "26shr5VwomN1s5PsqxXKVeYyqEbn7ZAFqSpGaT4uamsQf7sHVrJU29gCkg9zbJU2HjCGgRAekccbJn6jvfXjziKd",
  "key22": "2W8kpj64wAasEfqn3s7heyvz1juiVU5RsKdutBRg6HTizZECA5vnXfBBsnS1hZrZiKSLuSgPf52dzVBUXMK8tkWr",
  "key23": "3VhFsRjfz7NAn5pemSFseDms3goX3FLVyV2wpxMzLCJy7YBQiZ4MbpSMvDaBPWjKhtFfgAwuJ8Zeq6SKHnGi5fHR",
  "key24": "5tbxmPJjawj2fL1Uf3VVpn1rh3cDxzrjptdzKdNpEM9dWuqxYGudCbtwG7ogPCGPYQ2K4yW575d25d7r33PESPE9",
  "key25": "4nGQKPi5He8AguseDfvFqC85mrd2eszsNonms6PpKCCZ3dJs2N5Qdeq6jCfzy9ompxJR6qryvT1tgH2kjnzWBjSY",
  "key26": "3nKghaLfPpRdRpBjGqthC7nEqYowfWb3axD6mEUcqEaBUyVs3nPRjfjyX2wbUrLTVWRAM6ecGGoKiLWofofYSLZf",
  "key27": "39dAoxG61e9Pvx8N9ZG9CSRbYSWzmo7VY4qfp31rjq6RiizdWMZ2paY6Y2TPW88wZLsi6M19a9qWUf328RqQQF71",
  "key28": "3Bvq1b92rLceKBRxBKbHHSjz52Mre1W6oX44vwwcC8fjnrNrKftrTv8YjEprYywVgNFTCgiis6sGcjBjbp7Jhoz6",
  "key29": "4ttrFrTsPiL1Umsj6qDeLqkPHzANFFJqUwhXZeZy8XciPRnsC2SCLeQg5nN3mrtfUYLPCqqaJst1hyUMPQ56BXX2",
  "key30": "5tM9QLYutWGPGf3st77EQHjr2PF2i1gAfvD4tSAEozL9o32P1jatytfzQQBvpmu9hy7C4nkB2KfgjaLpJVipCS8U",
  "key31": "4NwLdVA9FoGmLqrkLVg1S5P2MrCoGG4mbR6qw8qzETQaEy1oEK4NBd1SyzbXPSBEfv114ynZXmcudDtGiNepzNC4",
  "key32": "3ns7pP5j6RRZXVxpnPQNv4foLGrKNpvxTJwDnmbJtf5ddWWewpZbQ6pyborSDUG1AZkbAPw8vRQMyMs9cknEj2TZ",
  "key33": "5b6fPcegMPGoEBJUUViYo8w64a9YV5DSq5TgfME2Ntxh4HnLkUU5CvYutVrS1Naubn9fBiuewjUp3kFt4tPqSRxk",
  "key34": "47uhk3G3JpSNGwwoQx9n3Y9VGckVcqNPzVEsQULbCNfshXtcWhfpxuDQouKNNkgTLn4guuafWj4pZriahDvd76ct",
  "key35": "zdFpEMDMkz9TemrJGF5tYhMrRhUs2d4m5kjxrHTVaUCufEeUTBoGgWthyG8jhC3FfsSKPQE9vdLc3Txkf1LnnEU",
  "key36": "3n8nqETWF3UD1qPhFrWtvNyS9nbiDZ1Sq2c4H1Fee2uYjSXK8thfSV6HEivHhF13SXaNSBxzy4sPpiA9GLjBv5mp",
  "key37": "yCBkzRF1NmiC6YYKYVMQJs8EErrTppYRXFaWjPAxbULfM5FmmvGZXKTkUJ4rDXpf7xVPmL7FBC4SZ89vtCr6ZWL"
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
