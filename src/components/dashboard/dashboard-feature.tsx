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
    "2jYS3WRG7ASaMhrRGfk6o86pYPkvBycPCvoDdWHoB2YonYYbW7RYDtzwTAwYGe3RoCJT6toj3chTE5VhrDAmcE2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G4GouBoQGu5nGBKzQowqN43onFKSzegugFn2VsQrBMo6yvnRK1aqhLDBXAGgeNTcLgLU22nMremsXzHyfBwZqpu",
  "key1": "4rFRs8Exigg83y3drGtLL78RmAgbRqcyun2kxeiQQV5Fv9z49RhWiexaxuSF8RyXxVHKnV6rtkyweLGsbYLVu77E",
  "key2": "i7mnHLc55qSf5LAz6Y8dy2H5dR7v73JURw7GZtSF1rqQ3jj1YVEP8VY4LrUomQjVdFmwEv18Z5ETc5kgFf9rd86",
  "key3": "45zZNQ2aw8mwFg7rZGuDfVCHvXu2JmjGjFiThMrrtKtRFEqs1sMFWvAKCoDzvk6b9xGfrYn7SWM5DjYfvaoZfidP",
  "key4": "5F1DmgxqJrMi8Pzmwn5ESdzHDkWhQTdqHcf5Gkhojqdz9G3zdF2vkHBzaHyyF9DhrLMYSosNP9SKfbUN1J1cWx6r",
  "key5": "Bb7a2BnQvcoxdipF65jZmTDeRvLJmCcXTZ2ypPL7HCiV7cMZKie3qheMqNLaXniaEfhxcwx8ebewSpkmFkw2Q9X",
  "key6": "2WBiizMMJ1C11oTUBuKzrt79w4uLySUw2k4tpLm2SG417JgSLoGFdyje6AzJer2AUtwD7YT7ZwLQQUXv6YqskY9C",
  "key7": "2BfkG6qBvfTY1XCLN6Zky439B8YA1dycc18ozisg8Z1vMGMWh57b1iN325CBTE3LeYAfM4Nkf8FgWWG5uPDTzgRC",
  "key8": "5tcV7cWPfphmxN6SeU6ciHVQ2x2tNEFYGeCT7uJovHS62okJJRd1od2HtQFivyL2YRrbkHpSePSGFwKxHARe2ktX",
  "key9": "28TbLSWyGGmL11yHnQ3bQJdhdaWqmPuDHFK6p9zWaMMXoUeeMCutXZHNN9Uv4HxqE9S4X6jhVEax5tv2HyvYVCdj",
  "key10": "hX72zAbMJtWqaCoxq1mzJ23MP1FdvBM1tgENWhx1xQSPnhBgkTGWZbLZu3m8YQRU8XCXGDsKQnz8N7jep2Wd9Ct",
  "key11": "VkTwBECY6gGM54Avtsy16B1GXmu43fvQpgvHQVBuAWFFuutZMV2T5UWbtqcBYf2ZkPjMACEkbU1mniigKaMkV1F",
  "key12": "FoNWn38u39b82T4LjTd2buhbCjt89w2aYkwnV62S4FmoVYAyHJ8tdBpmKGphRwqJTUuAQc5A9nDqFa9vaJ3rsV7",
  "key13": "2NmaG8aQVdVoHD39i8z6UBaEUkvsx1xEJ1xBfrMgs4qtq5f25UQdU1oqGNzt7rcXFJtkEdiiFFBHgETEHknaUrsE",
  "key14": "5aHXPfzs7pwpAcB8o1GDmB7vSaMC7oDjFTTcsvPNsCFkUcRaNYd6646SWzTvu58dtdQc6hTeFKFsvTDErGdEhyHa",
  "key15": "3vCVxLN4rmfqf4PVgJgz8cyVo9RF1xP39Mxeo6dwMWzMF7tupLp5AneuhqFw91EoPU9sdFbxEQEnv88r6ipkYVAF",
  "key16": "sLmfNQyEfkV7DDD7p2bvipXapUDayJgHH2XSk2PH2BGXN6DDtvgHC5QaH4sEpufxqGzbhDAcnM5sAfrgK8qGmki",
  "key17": "2P9VezxCurvQNBEKs3gYgr2AY7BhFRNevAxzyPRWmn7PGN41T3ff32H5bD9JEHaJEVr3DfrzKswHpi6BzQqRq5Jg",
  "key18": "3CzAJSKWEGpAqqdqybQKcvRXSVySui1xEpjuhK6eCY5m6hHmUU6ZWmHypoJhPhSagcviMtaDqSA5RwBdpnEubHuU",
  "key19": "26g1vsjskD5svuqY2eUtrcFAXpHb7mz8o6QhNYCyTNxXVZKUBRi7Nqu182aCsHXPVhyzqb7Czs2gKi949urTaxb6",
  "key20": "2SpqyiKtCDaBCzQwoBQ2og88tefEpsikDUuJXCMRAnKYViiemeAYZK9NTQBFzznWVMHcgb4qJKsYhXBbMUqYT4W8",
  "key21": "4FLL5YDXbDH6w8GicpzAqd1AB6Z235Ngdz3Ld5tgHXok5vYM2L3wMQZDh9GMyNGTK4RRzqveKfDRLetzh8XNuFie",
  "key22": "UZkBNYkdFoV7yzP8FbfbG4sQx9rjjQ49vZVHeKNjRwrkWjtWMdzk6Gs61CVoqg89TZFLifu4XQ2fnn4hvTFVDkp",
  "key23": "2TNuS1p5cz5HCTZ92ea3pDb2xqgGfDvcshPfx8TYzw9euDHAVK5UzLssnu8HtYXeRBaxgZegkNbPwWaoojUpKjJ1",
  "key24": "57cbukbV6LNQQ6iDf864yHrAn8xKndnkS2g21wDnL5NbwageRihfAid7MyCyNEbQ7uRniaHySDRc93Pg5AMLAmiw",
  "key25": "4k3P7VYqRxqXxJKgR61McNfpYs1pKeJ28VQDVUCnraWNXNW671BDK6FwMwfdijMsGo1vpC2rn4NYVhjzYoBPURET",
  "key26": "2FSh65jY7zd5qyCbRknwH9yo6eUWNKybLkp14BusKsyawcy2egVNBednHVLNAQVo41bnRPMb8p2HShvygNmKBah5",
  "key27": "5m33JGpwnpDDKH5h7ccTMivTBYDt7Jy3AZMhofmKqCk1GBTdYmERLBqZfpsuKDfBjcbAVu2pgrw1x8LLfREiHrVK"
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
