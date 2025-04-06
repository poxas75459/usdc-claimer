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
    "384A3VQNKH1oV3Ydedg3umGmEdpML1W3rjLgQrjxLqjU1dHTmDb6TMofN3kHiQguMSXMUmk1ymi3T6JihGku6Bqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49TJCicPaC4X4deguNT5KFjtw6T1Jk4at1wUbTnABYaMkgGwsjEscBq1MVrbiLmYK7YXc9hseu6vARcM6X59Qko2",
  "key1": "26vaPYrWTzPHVAC3BX1JUrsGV9YEVkftX2VbiDFoEc9TqrZ8oDGgbyr6PC6DhJD3cg8EdsuPAhrkwQRE2vjdYiLN",
  "key2": "LaY5fgbG469SmaUs3271xWewHTX1snDXarT1vRH5wqZCmsbZ542czPyhhQjEzQcxDTWgMyM8jKn1UTJxc4Hfu6Y",
  "key3": "3fgWb2RFygTW1iYwkPYNpr8xEP2DAMTKGVuoufqmg8fSTBtvajaSs1TFhvuN8JbDHGAFp5cbT46iXu1wNgqioRiJ",
  "key4": "2ccpDJckRGuMsEAwpnorF1pPpZoWPgf354CcbXvW9HrUkQgLro58bXAS16TTxYKpW65wYy7984sF649FBWQQhTtC",
  "key5": "4M62utbuWB5xd38RETH9bXwysUK1wGnEY8Vyn7xAe3YkqtBnxjkXTK44z44pPS4T2oLtpRLwBmLEo3NyadiUmbrU",
  "key6": "2sBbgEL9nNth2GMG3h4aHfVPeYrvkBKkSdtQFFMXcXbxANzknEsN1vaPrkiYEFA3wYBd52qKXrum2QME91yGF5C5",
  "key7": "4PKeKEs15mnyGKMiB2BJVazGStGfkvgeX64bnkdWvpxzkrtCk7iSMvimED9WpByFU7eM1ywB862HGvniQqp7R2rC",
  "key8": "5P1abWuxVzskd6sUGAPTGnHNNu4NAxAfS52juMGjedPQC8LByPEtdzzgpaWigt2qbgovXWDmJqkFaS9jaiVKMQvV",
  "key9": "2g9ASfeiD3CTKUsh5CyxJQQXBoBz5X92L6Km5fPzfwwC8JHi4wCgNU1tqtsd43CxEbbmckXm2nMVFBiPZLb4wZ6t",
  "key10": "56M4M2RwxZVkjBtyNzAKy94zUUt6YxpF9McV7nNgku17gAhxQW2H7WST5s1pRJXX3yrsQYyYQ7VDJG7wuMBwt8bZ",
  "key11": "4ueuYppDkwBzeFn49cePf77Chpg9BUTaJB12uumWcFSvLMenxq3aWsmMV45aWKU9cw5e7iXSFM9LMRwAUGHUXAZu",
  "key12": "ystp8cJvVzpTr8qVVgiSf6XhwwcnRZvcbLyXzccY2EXpaphzbRVSJ7XwaTBeTpJXRaPrxjnZ3YuMUNFjppWvL8X",
  "key13": "59PXCBHJZewmVW5y3JRPEKtVxhBVoafh2UURGUp2amwRUVUPSLi9BqsHoqsyckE9hbMXxi6V9EqqAMwNyv6assGZ",
  "key14": "3XWDJM8GEetxf7x4Qf8a9RRAgqr28VfBzFn8e2GRNoLZVwjQqRZ1TUKpsb7k9E3bfGMPaCcHXdprXtSzBcWkhdT9",
  "key15": "2sYPCDi1k2QvcuNovLqYSHLWCDWXa7H8AEtoY1ZHnXJRbZRzMERwz7YZwYzDo32uNbPDnPnKrg93SHbFifdajwtX",
  "key16": "2qBbNobnPb31ocEgDbY4DYvfANqKuiTyUhxzRxdeAA1GQxvp5z2WoSVM2wgmAVEPg31z91HY4kSQWZ6ie4yrFduY",
  "key17": "3Vx8boRHVnAi7cMWgs8weECZa9QmzJ4tW8VyHsU75XXzwYkiTGcDWtd4LYY2pThMq728g5EoDTmGhN2poUWfBMU",
  "key18": "5QwHuzckhhijHbPoCNSFAAc4hKDSjZbg8vKguFS8dUgSuNHhxe1qNvmEV1NE5CSdMCTgVndktSK5sdjS242wi8MJ",
  "key19": "fu682u3oZkvTUKmFCcnGDf4pTWQHqiT4STd7zcxxJL4KHuvu43GBEgpsaaQ1GtNvWjVBec48UXHBwhNha7hN8Gd",
  "key20": "4VkJUrzXxJCmKzuwuL1Wekc1j8nCsHDXEQ9cns7LsB6NWin4MazQifvZgWjsxUWfY7K4SQb1oHCoDGurvaLWS1Cv",
  "key21": "63pUUGyajQfZKymw4tgMZ6cvpkKBqnEisG5tKkV6HqVDtpp44NqhZ1uC2sVmFvvMXmv4VBDKMjUaivESSeG1o5LD",
  "key22": "46y2pSHHPhUuynaAgm1iJiGBtHne25hgK8K59MDCkkw1PyQEsAwYRXnbqSFwA8QLHDgzg8NFSbKeE5KLq7dzv3X5",
  "key23": "2V749SBRBqky6GeDH5yXcDZrerKYphp165tzc6XKCw4mX24MhcfUReLP2Lphga7kA6DUvrRM5pRZcy7S3EaydH1D",
  "key24": "UJsjsLjka3pBh8iXyzetw7jB1nMk3kttouC511oH1Z3eVJn1tReVoCfXKaGhT72foKkUZoJH7RND9k3DeimPXBT",
  "key25": "4cB6HXL94CoMhYTzkTrk3ip5xW5Q7yyxftjbP76wXLDxvDDsxdd3tecSKmzS4fGRgHjuJv5rFYevQWMGJBX7PAgy",
  "key26": "3CWR6Ww6T3Vwqu2oJGqhBohzPtAioQyTRU6xVSGn8bqcQb7HwnxgwpBJLtXxPLKrrUdJ25KWPhDqNV4XFfBpuQSZ",
  "key27": "3cW1QB93hCTxyjWv6NczAqLMymErEYtVgHiT4h8XRj2tBjMPHp9Skj8sEL7MQfq7cynZURXHfTLB8nMwdSkde5Sd",
  "key28": "4tvVVeAaivf7uKgN3dMFGTxJC5agKiy3b76mNVLyhWUNrozTagEQNCRf6PvR435GAve6jitigK6bGmbe3JPMZpzi",
  "key29": "35LaUubYG17tPNL93tzWNvdaeABDiV7Sn5WRctH3iEsyi61FdpJeMZH72SEPdipi2re8Jemp4E1kk3augtQk6PTH",
  "key30": "2ExVFeWJ7cbUJVh1qhNMrCNFovTxyWRnLhmqwnRSTMY9J7YGaAZscSKTyjFrsX5ssC38D7kqazy5y5eSoV6FvuJG",
  "key31": "2LjqqCyK233HsQ9rXr3xjGY6wmJLMDF4QHVcXPQcAyEXogYLQg5ULqcTZHCCMjBCDu6mCAvRYyzWETCSFv2WsxEk",
  "key32": "4bDTY2FBC2CDvgBjiTn5NbJKu9MkWwUeVRYBNSxUKvjduvpR2KX8f3zb5Mu6YeVovCrAjAKzZRwvE5juysFaSeB",
  "key33": "peyCXVXkjLhoQPAYc5TZoxQTPkfPgRg73XgRFAJSz6iZnhFLJWDtXKEi3T81AZzf4PC6P2g5KYTDaUiZws4aiUA"
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
