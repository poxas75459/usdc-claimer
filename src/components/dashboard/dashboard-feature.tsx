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
    "2hCohBeHh27f26LqN1cH9BsngUSm4yNbV6ER96UFJJcqFx7AASdoytgrZ4dNk6U4YBjKUwHaiGAm9SGvsTvF8JdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZXrMMbf8vFVumwotdRW6zRfwWiC2nkUcQsQD4AYtaoPpnhuVmihBsuTVdUaXbKbn42Ppn2HvWVny9kZ9eNvpkx",
  "key1": "5eMoFT46M2wrAv4zZD7w28LsA4A6RgNBvexYopP1VUypUTFLAmGp9YDuxwGugRzCpsrmKnWn2rkgPGjmftKBZCTg",
  "key2": "4xhQusoD8bNwRs4oHzHrZJNhbWSjnJG8TumEMbT5isEyam4rNJtN8puetRhFUDh6oZAxYDxTuyrFGAYgFtJCm4hG",
  "key3": "4jW2Er7CVtuAYcQ4yy97v8JTHY3nrhv3bfhC69vpumZCuoQTF7LnCf3DRAFJYCgwb3r5uF33bah9x5xv1uR1uf1o",
  "key4": "4XJh6nc6e25tmkiuwfAne6KYYp4aWaDAcwsV5uRV5kxDcT1NcZUMw16edP83AJy4u4JH9kSb2KotYdUAjy9NjtR4",
  "key5": "3MKNRJU54ewHucNvnoDPyWb3oZzSgxFbTKYZGm4w6wbQYtsTyZQFXa7CrZaJHoQN9rdATUtxQG495JZo6T9D5LgH",
  "key6": "4Dfx3yY4HJm3p4HUqe2H7MA9QiJveyomCGusQgkvAcg9Y4gVTHqf2sodLzqA5FV4ZmQw5DWbvXNHnyLjmaGemUt3",
  "key7": "3soqUtwxqFdRVBUPw3qxsyRS33jKFnjQ9zsJV5DsDG5GMybTtZje1ey6JgTdobt5FELtp5UyDxd6a3UdWkMxDDNL",
  "key8": "am6uqiZPKoQkawAwdFV6CDMAq9TSmk6bfkrQwqpDiaF31uR3GAgjTUBxCVu6KTiBx14TqUWhFEhmHUTxT6aHgyX",
  "key9": "FDNnkuPERZvmJJxekPA2cfo7V6jtEth4FmaNRi7oWokiV3qXJTySvnnvUDB4nvVWczqHWFxeJ4YzNYnfCqmiFok",
  "key10": "3BuFZ3JTnHvCsTCvxntbNiWT9oHg45JnWWtWrQYpMxHFU6c8WiwTUyQ35pG6893oCGjfTjopaKVVTscM7qiy6D8k",
  "key11": "4QiTLUWKaCTd1uG4fBH97V2AryJPrMTgGph3wfGsdpaKWviefVDV9V8eSFotKcjGgt2oA7QzVRuEdTFB6xtLopNu",
  "key12": "3NgMa6rGJ8rpm3nrKGtSW7Zs7dxC2UEzVPohYBWERhrVDy649VC1MjwGKuQ7Kw7XL6qb3GYZWzVBNjPHnf9M39nx",
  "key13": "2D52PpymAoG64DEXe2rg8t4J8N2Q8RMNjLu3VDmqFzyXBN2BtkzNWHouaku9r5VVg9BcRqW85TXFwBc3JPESJhcs",
  "key14": "63upTn5aXDotT3gu9A8tABgBkhoUFBLCcwuXCebYXNRqWf3QeVZ2WqJuuq7tNm7cpdCT1xRtV5gddxFSx3fVrMrf",
  "key15": "2Co7spmxfyPLAtfGHsT3TzdRLpDsTQegak6Gyu21fQ4SDMqjPSpeRB5FQfDYvtWADx1czmSDQ2dJPAxkxcPnmcs5",
  "key16": "48sArVsWHQdMAturkoAMPrrWLUKckJmFYWRT16Xvq5obbbytG9JW7At2cLky7mdEXXqbbqYw3atpDbh7BTiVwnB7",
  "key17": "4GzXhgH6k7PosdGbt7dJb9LSU8DudyG9Yr1jfKXBQHv1MpAc8mDJ9x7DorhUWJwWJZRkt2tPNK5oaNDqAzCbLLi1",
  "key18": "4eYiRc8KFQcgPiMepdkkQpwDdGyQbrjC2Q5zfP4YG88WUTuF4diw4sngx8WMyfCdwK4EZ1iGLoVznZ2ki6gGDMLs",
  "key19": "4NLrCef9gd4pr2YwH2tR3t5CqKpxNE7SHngGLwBTdatWZDofp5BnkRKdjbFajWhNR611s8tK9DX5zSKiDaYMMqWt",
  "key20": "2uQj8S1kKsrN9RTZWjWhhBEWD2HcbvoEbdvZ9jSdbTyaB2PVrzqCZAjf3nDB347TeaRH9xDDC3z6sxczEhatMmRE",
  "key21": "c21GiSiN1DwbcXvnef6UhEhWsxDvTvA132rPcF49ntGqXwfuMScX2H8K1Gq1hPy9n3E1spg8rkFRJ5QujXCNT2V",
  "key22": "5bosF6Vb4SHLxzAvLMZKT5xnAGS9RPFo4e4ofEQRDy662NfzqeitNKBfphcYkDwA55K6ii2SgBK8e5gvobZa1G7f",
  "key23": "rYWfzHhAq188ctagJiCWd8qngw3773JUAKuehARtWAwCk2AtqUjrV7tfqkZVVjCRHRFMEJ3qwFYvEnwgdefw6gg",
  "key24": "4Gi4azqbeVaycUwEXEwwyZimP6LL31A4p8JHMtzcnoQiLmthyvnaRY4eYjGN8acFTodHrCUQuRqpoisgr4h2CE2V",
  "key25": "5wRxyTNTiw9EyEBM28cPYjSeuprw7nd5vcjuubag17vaJhUZZ5pP7cmQrj1ZKq2evuHcizLPqbSkByDAN4bPEZem",
  "key26": "5RyJfrCDbqZeahcAAzLmJy2Wh8wEEpW8Cqz4xxLUvUAP7iQ7nzStycLUbSEJzACkohUVpcTQoeJCUd2xLaozVAem",
  "key27": "4sYijxadAcLTusu8AmMZeufSBsM5eGyPimaGVSh8ECTK8HdyXLX244QjdiUAzVqZT91LmDrpEmeh58fWBzVJdtxE",
  "key28": "5HHN8m45TKeEXUZ1kFPimLyUPfnZYowuWgvmoTtExv6DzdjNeWQ5UkdpPfRUWrH8t3E1wK73YZgnHLevpmAdrjLu",
  "key29": "3y3xUdvRLHW4yLVWo9ZAaw6spLudkZ9Q4NEZ2Mv95KkW12z5THwG3EEYAFUFPGJgnVQqTZSL6DccekWSTyvQsoAV",
  "key30": "1MQsDzJ8FUWBk6MoajS8f1GqgdQqKpkWr3e1razWcTmsp5ZGQwp29i9KJtKTHkBUNDGMXLVeNomR48466wUnPsj",
  "key31": "5vz5UD2D1299VQ6giQJnCxcdrhRUQjwMDdb5UVvPnwByqK4KEGdezTN1uHLgoQv161VygRZoLkfhADFT8jQ6XuDH",
  "key32": "23rAXySmiNLYyYLk5ZX91HitmuNRFHWjAVkbqE8dnUxa2SFvjd6xZLDtCb3vrjrBkm5dTF6Grn29gXREjK526dZ8"
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
