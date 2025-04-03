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
    "3sbEXibx52JXBHiMVmo8ZsNdtZvs4Di6gjZMj2A37b37cHEC6CedZYbstTkBPGCGr4yyCngVy992iqKs7LzgzP2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zJjVckXzrK52RU1sbZSGZX2LKbfYQCf6F3xQMRpjbJvfEUXewaAD6bRso4ZQXHnRDpiK9TSgtHqJQzqnBeC3ChD",
  "key1": "3YDtta3EfVHRTo3KWcfBPa2tDjx9ckmFsC6ZtReq5sGX9WVLMB4noysKESbDhCwe2grinDn2dWVuewXNkHLR5mTB",
  "key2": "63ck2UE5p7ebt1YczqJ7NmmnxHeMLoLXVsZpQWWnLkXm4EBLgLEYWBdFUKx3mjKpGXq2bD6g7cgJ2ojz2PpcXAiS",
  "key3": "3KRGAxv1cSC2c27JLKy6Z558mxXsuF6kix5oS3rWFPzBP9BEZB9qVGcXBo3J9GMDjXY88BLKAZ79kFFWMgpUBbtW",
  "key4": "4G2TAQviHySXDdi8dcydWvQyvXoRsgG2tPwxYWNqbh6q8Z2jmsGdq49KreRYiPEAoyaGE5mANvhrNkapz9ARzipW",
  "key5": "UXXLi1ZaBzoqEFh4sn3v4TGbMBiVepL5RW8Mwj6kpNomJDnDcYqszpofHJh7Kb1ycGfQw64E2eKv4G6YXJTTuRi",
  "key6": "Q9vxbL6NHqGdEEetCBsm7bCUozyQn8Q8sNdWNBrmRRThVEuANfWxjVRjFYswZSgXiMS2z6jE4BpJT6hAkssdYAX",
  "key7": "AGB4CCLEBXaj9YgrzJT6iLV7aZwzxvdTrnBu2utfPjoTtkZJF3jcpSfse19UsSE1434gF16cr19qR7nnXAcnc4u",
  "key8": "4z7arPSsG4qvtQ9Lnps8psjwfagut2JjNvwjkdPELzMZA29nWZk526foGf9MgoswN2G5UNbECorc2ZbqXKqGJKG6",
  "key9": "4wLEypeNos355m69b6qtfAMyRYbf8ZojdyFC7VZwTXCZLqrwoXm9qsPWZga7nQuBeUTUxczMuxom6sFaxdvfwZaY",
  "key10": "ZxQ1Ynpw26ht1nvdaETbQQ3h13RfRdq2EQv2DzceUGc6sbh2ixxAsytCaPipV91HcZg6RC43UifWEikSvfDpVQA",
  "key11": "2uVQoYiqzsSLCU1udobS8ZNU5kseEXMQRhW5mPr6eLcUa7qnCKXyaJ1W1PW2UP51AZXtvwvH8ZgBqggXkkPPSdCm",
  "key12": "2qpPcQQ5FHuqXRS1BCcMZKAdP7Ez6mzTRqGeomm2gPkUjqFk69Da4AEYQJqKr4goChtHvA2HYQ7R7GkG7o5NW3vi",
  "key13": "4AyEGdyWAEoXxntMRnX7ZPhp1xEjtRBbpvkNC8z9wCE5CwYJZCucVX8JeHoPg3eqNw5k64fVwMqpbUsF8ugdvZZn",
  "key14": "3K5ZJPUECsQ7vhZu7LZoiDFxTUGgUXvoPfimMJf954EhNeEEEqrCMD8u4M2nKW4S6UeuFDj7puuazhttaEHMRy39",
  "key15": "2xug2xHfxvEKBLW7V98TuiraZiu2TPC5uhEKGsKeNaywAsusNkbngbHKkeNYVYgYnUNiZmWSD45uYpkirCvJ5jc1",
  "key16": "2rJSXAckgN71SmKVchiWxgArUUjiKkV25gx97vNdibijzi36k2mpggEHMKV6fvvPo8j2x2PaVjVrksezV2Ew7LJ5",
  "key17": "3PYanAxCLDi7jZbcCKMDPsvkwC811Mjuh4aXdooqxfLcnvn1Fkvh14jz6yBG5wXjdppTygLd2u92riR1EZBXutoD",
  "key18": "3MZTpf6EHQaKHQ6vK5DfkG2Rn4ctK9bYBnhPFm5gYwv4nn6hwYXQUub1PUYu3yowpHLgnsvKwPWGhSfTytoedkkY",
  "key19": "UttoFcnUeu8C56CDD3re5EZhkxUsNH2GsVMennwDrK5crFUmAYcLJihyNxxNiFDhRMqpiyYW8eqwjJS6nt4qPUK",
  "key20": "3VgbduJEF1Hjsa2V6ng1p35ZTxbJvmGxMMqkxUirKQi1hED198SQsN7jw9s2VEtS6JBu6hQGvWBEHREBhmfMQcwx",
  "key21": "2FdGkAakRYWUThwoyYWboLwwDU1Rz4r2mu7f5ruyPLUhNsppkuPKJpkrDTGEL5AYhS8rA3jbdRUCA6E5pbFjWEUA",
  "key22": "21uFycNRM8jkehLw2WuK5NYcg2Ym2acKcCYDbQALDZsnGD1Ebfcdt9TsAXJ75X5RLaRDp1XF3UF9YT9C9VR5MN2r",
  "key23": "65c2ADPRzwjZWu4U6iG9P6bmW88M1FFbx4vHg35fzMDMwq2vzdTdCU8aEZ9W8mGKN2VWFi2Fomm24JMQhV52Q4gG",
  "key24": "5Xu7PWLqYjEEVUM6sMbNHptcQNZ7M9q5Vf2sZMKfddBxxB5h3tgpF7V5BNxRqXzSAgnKsLChp82D9KjKdmVudagy",
  "key25": "3ngHQ9avbdf7kfeYiZfKPHd4pRQyHmBmxw3aeaGJakbQ5Fj5CU3pAfPXxkYwcnbuH7KnAByTw7CsffQpDHpXQUqn",
  "key26": "dCm5LpXKWCWgYwXM9hm85wggPKJ51At7qvarQF67KhVJCcNyPjPxvFQM8fCiwcDfAECu7tKaimKaAsTvYgsBiK4",
  "key27": "51uy2LHFw3KsmF7X2y4htqeLq5evQr52EmDGo1723GmjsCGaLYWn8ELf99ryLJXYZ64hKLh8E5T2k54tok3K78d6",
  "key28": "3DrifJhDpuvuCprCehymNCphyE623UYSJy3KQiHaoGRSkm4nQLDCieWoLW1NPdoJmv74SDF1ZcgLPS6XpJWCTuMR",
  "key29": "2cXRVSU4D1TkAQCBnRVXxgcZQstR7aQNidYuyfpfravDqYN3ePira7v87seLyMhwoH1wSjzZoJpvkSva6bFQekGZ",
  "key30": "bnGHw6vaDseqNS8hWymtJU39x95Hgkbei6ce7UxNYxzHGnxb4v7tpWxWXk38BZMEbMS2UDoykR7AeMdd4UXdyB3",
  "key31": "4Dc5i5HULFUugXwT85VRW2qh1K8ZbvFyoDFWeYpf8mFKrZXN9tnD6vfoxZncA557p2vzyyHeKpZRt1aayn4PhdiL",
  "key32": "3dfw1xaRQQAMTDYV7s5R6BmPbXFnZ47HY6SqhtHbd7gCPu8U6oo97XrGhL2SJsZWjKcpdnDH9LtZkLiGtgUBJfr4",
  "key33": "4fZxGZmN7gHcLD96swJUyVaCr2ZfUVpBCt2Jj1aTNQbyX3odceFNdNNapzcyFHHeNso18ruyxfchnWfcA6jwuoAN",
  "key34": "5pdAbW79jLE2ArX1SuxVec16hkJ1ob2bNPNifqf2pFCwzkZ6GyhrYfk74nAtavH8pQsjuEJigfCG9jN8DsRzms3h"
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
