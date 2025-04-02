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
    "vgSnLpxGMkcxMr6xxvynTebmf1xuL37wZzk6v1ajg2HUV8hThK9ygc833Sth28Yh5aiAudsNDkFQQTY1KASiD17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmNtvK8Amwe4hh4Q13wkuhpwJD9ixQQPekMH5tASWpCpNBdyV5qkK2iP7FqbmAjHjbsZvaVViJNiKf76xNP4fCP",
  "key1": "22auEpWaPeKTP8V7RVtpxkZgAtuaBDJpWLGkbcZe4K5tnovREpqbt8TC3mQz25KLRquKsqBzMUYxK6NeD456oeew",
  "key2": "4GohREbf3fVhRsUVbepRaSaAWX4n4VTZbfsZQivgGMGgmTVWvgu1VjXPZaW9gRGjzLWvfJRqfWJAoGXNQkseT54v",
  "key3": "3HN2AYAu5Gi3TBDfK6TckwMYQDsin9w9yaXfh35fAxYcdhRztGAUmHdavJPK4Mog1hnZngvbbwWEGbTxYrhwgbhB",
  "key4": "49hL2NjSNQBSMgEz2cvzijvL7ZuDJAmm3YY5ETBzWC3o3S1YfFKiqxfrDjnxm52SLnaEGm3Buhsz16vCWQLhU6gM",
  "key5": "jH6FiReSFYenBVWLBHedUFdsdCuWYaRvxf5As15Z8aDkLad8xzPqCfMVyPxyfLf2LzXWVoDfEBEtVMSou2qLWdP",
  "key6": "4UthJCmFgYk7FApDLRKkct4uuzdmyihhDRiM18inB89NE1vtWK1ofdvZpwHysZpX8mGtpk9QmQXjyGKiavmunzkm",
  "key7": "5B3Ngo2TdQpUjtdyRxCDDHXK4btN7YSqojFprQj1RwnspHZ9V1jV7NFoRRUgADyViAjfgwwgNCxHRvDUgHi78Ayr",
  "key8": "4poKjmgAM9s8s8KUVbfX7aDZQftcqyVYGcaMRAPyT9UnRVWyfcZ8DXt9KjNDYngoBP1KVzAdr1UrwKmPtf13ywW9",
  "key9": "3PTB2qS8gGxD564tPhFV71vbqdgnEMAuDZFLcYqvtGahkWqr9f51nLYKd46MeCWQeHqUTTiCbhcQfTURbggovVFb",
  "key10": "9SR995mhuGwM28CPXScFq87Uri19jhxB6VmyPtkaUTqSB5V877gxxmWaQmF7asFzjH9ARpBNsk2nayoztjLRFtH",
  "key11": "3huXHFtmdRMFjnEi9KhmshR7HZN1wCfwXNatXjDqqknywmS44ySu3mEX3v4dAuVrgKxF5qUErKHRfLPngvLfeytA",
  "key12": "5J5HMWv258VS3tg21XECpBeTcWQ8pn2mrhUJS8NKV4J8c9hkoPdN8WYUhoAVBFk5CyGQHeSy789TWmG2bNchPF9Y",
  "key13": "3GdigtKiyDLWXV1ZCaWvvn4AcjMXMCqHYbiDNgjXYG49GvhPR17aooG3u51m3eccYmerEWEowQRhBoRPiJZM9Diz",
  "key14": "25SYCZp7hrEoSwFdtBkXLxfDJdRzGGfzGPo9h4fYg2b4qt56fuVXpPWNs6N3Po4PAepTphR6cyW1TBQoe5z3qdiQ",
  "key15": "2FP75uiEve4uNsE8yQVm3dU8cfXkugbU72B65AFJuxozyC6CHccxA1WNyk8PbUeZZg4ZA74CgrcekW4xhgjCn5xE",
  "key16": "4A3sgQUx8yxHGk1UfnMgeMPW4xMpu8GZ3ck6G1aV2gZ3Uu8XDXJbsjLgcDpku4oVXwrkaDPCLCucwP8Gedkb7aLa",
  "key17": "2d6uGhCWE778Ld82FMrJ5oeUshn3AqVjwLB7KpkisdiVUGvY5YWm7HBUxHWCT6VoVT3RgTR4FNKhHW14oevdDdKJ",
  "key18": "2c9kny3aUeGa6A4EoJRQiaB5aA7r9U8rU8qUm5r3vMefGyGniRACQxxfpUYFNYhJ7JrMiTBgJpWacKiWCFvi33nF",
  "key19": "p4fv3HWB7Mwg8sBL7xpRVcN683ZfoX66nNxxYsUfxDaPRqcnKvmP8Mc3S6Gh87kN7YCxPgSm3ze12VLixvwqgqX",
  "key20": "4MLJ5zFgkXsKRGQqXCVZKg2ciB7J8DnCYNm7nzdr43okyBaFzoStesfr9ood5w4CKu6JhSsbDjJtGrzZ5mDLHTVk",
  "key21": "3BiLTjfSCogFj4UZ3UBdgnQfkGVuMsTTEANTWKrzVrbkFUG2rzkXoKi4CWZeTcB6uqzihZmui9zk876zKNFCSixA",
  "key22": "oASbiBu2YqfKpSRUaQMWrjrZ4kxzcr1QBJzxzSeFWT2QMbtmFXyb2KdBWrwcz8B1USAY7CwcRh3zJQwYCE8oxNF",
  "key23": "58g9oWtzkYzGtgnD7WKN8RKu98NxyXr7Sx8wQgMAcyMWsUr6KxWKwS2WZTxfBP85u9WUQtx1Vqpojryua8wZ762e",
  "key24": "WiVhH2p2b9m88EuuvE21Xj4Q4EBkjpcpt7iFsimUAXy5DYGRxL4HTBtnVhfgbxCoT8fK6yjC9eyjD994xC9epqD",
  "key25": "5L9XYzs9o84y2hTPEhH1LgvcVxTcPaWVCxb8WvWLGXGFQcuPds2SLFbXzt3oLAYm8si7zfzgCQy8UX8FDW4ji8Af",
  "key26": "4j3UT27zRe6uH48ULgvj8uBoGqc6yfF39D1igBZw5KJyjGgzq6KYneVx1NGSaMYdrdU4FV9Sev24qdhQ6nur6f28",
  "key27": "32gV9abVF2rg9hVBBv8JNs9veNsRLAr2e8rVFDZcJSSMTFFwTFC6Tb8G6sPR98yf9waurUs6TsAzX5tKUQnEHVKA",
  "key28": "2UhsvhXULSKaX39ARZyXxQjjr63tA1BHQjdgFhimQZqRxh2VwiHK8AsXJyunLBNV5zFqToBrwTJXcJpCaDsWja7u",
  "key29": "4Cr3ukQSAAVwRoXHzVWE4htEqDceHeg4gwQA4cChnkvvS6vadpk2MrsrDEYx2EUy82BCQKg7az5JV6HMxWpvp2sR",
  "key30": "sN9okabViHeKrzBekeNDCxpABPumG5tAh7mxDjkPzeZYJveSCTvTtDY4KJxNkBZAVFMrB5dNjKG8qUW7t3pTnfg",
  "key31": "2UgDsinuBnEYNWVSadQQnvVt2DmVcTNtGf5ULQDqakJEA4AjuBh1e86ATCwtP4EfcPAvs735eY4riXZWuoNVbrWd",
  "key32": "3zW4iQ6CGHJD1ktYFucNancukcvLEXLVPxgRonq2E6JorthAGH47VHEkyGxzFtQrHwndzRGw49kVGsDxoNWEzPon",
  "key33": "5iHE96UeNG9URj2qF128g5GmFsyPCw95Bin3FhTueQMBiQfBw58zb3jXk2pyx4xoR7fobBnay8UWWYRx39ZYPzBo",
  "key34": "2WF5uXjaK8vrexpkXeLkQaSgzD6jpPNMdWUPrxB2sBMDdp7DQ4H5Qx629xgwSNJvcrwmWHNLZEWLttZpixo9sLFY",
  "key35": "3RXSX3rBbnycAMhmQRwj7nrDeEVE6pBEAYDJ4Ve7usL1ADxotVyr23GoK1kp2GfNYq77DQ41sxkUH4w99N3ogFfi",
  "key36": "5AwkKG1PtUuVyTkP5xNmbK1zCEJwh3f8RhEXSDHkaFB4Z1g6pMWawjpKGmF8TfoxJGvY8LgtYTT3gcNQrNvqr9AS"
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
