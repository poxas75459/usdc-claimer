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
    "6q8jhEkkzLB9q1HyhV1TTDVrAVuqXNP9m3MoBQeUA2dcZseYMZAzddydZPAaLY473v9iCkQp1KacyDEyig3r48J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K4HCSaLVtEyvLFwBM57SEw27BUmBHqYtzwPN1CytfRc7huAt5QTjcRkmXHbVcaAEMqhr1SJzX9mqaAdjqM6S813",
  "key1": "2bLmsGrV4gnCaoXGieTP2agSuPNDQnXDCWJQNRRi45ppu8QYCSsFw4SeBGTW3NdgqkuVbQrqQ6QorzKHZ7hGpHsG",
  "key2": "gkNRrrXSSNKVjn4cFHR5uT6GYjrpHhgH6GQunZeb6RLzGVSV7EJ36qfD9t1DdjNWzF2f1fjPNYEzFRCS4tVqHMy",
  "key3": "4Rtaqiye7Xf2smW5Vo9pH7bRw2RbCqe5r28EmpkL5zo5pHTuKGaZAuggWUSQDyyoPEdoAzH9cr26wWQsXbKiCkiS",
  "key4": "63R9dptPWWJ6zb93ipdEnzTHypw2DjWLoXz57DnM7cxTkPrTBcVbh8ifmgeyPQy3qAbBoaNFh33NfTRmCW7v1Ss7",
  "key5": "5wiF12eGrDQrNELbFdtYr7yUyD1JFNSgoSyQTh4yUsEqcXESqrtNY9JCNdgfkyaHssjUoQn1CX8hYuuTFYYoAeTV",
  "key6": "2TXqqXoJn6GUEATGo9AA6bnfXrBTGKpzX7dNMNAq2fHCAWMWUvWhTNrMqxDCLQLjh6ZfhXh21aMQE9EY8XBGD2d4",
  "key7": "vThALZrtct5fCG5pTjggARyzrSPU9e4EYJSt4BJcCpxJ2deVXTCqYT7dzN27rsYckHU2vxSApxEmVh1qUhZ9GoK",
  "key8": "3dyXGjUsArqy8SToVtM5NHfUDHNNjaBSuGQi2iXEAa9kQPGUAf3FRaR1rvHc7Fc7rVr4pV5cqRkLdGFEAELHCr6M",
  "key9": "jfNg4vwu8KMXyuX5ZrBTU93JN3Nr2STYixwWaX72Fi49S4kbAqRNc9dx9MdWxijA1K5KrAxKgb6ppryYmn7eaqo",
  "key10": "2gCGEJ82Emnu7tutrmpvzph51vHY4Abs5mJ8T6Qs7qxKvu66aN8c3Mkm8QiqfYkLdFhzh1HCxhHFF6V2b6zK1KQA",
  "key11": "2A7eC44XkhBFM3b5y9dfnZWaL4avSWRniZ7tjFrpzecufkfNR3Jn2JPMXLPcZ1T7PuSxUzDuKbkVAbarNB36wsdY",
  "key12": "3hqTM2aZxRUm6jakKaPk5579VyFaqE2CmxxXRrka7fpBQWRmYMGEX55YqFA44D5TJTPnB6oWGi7yX3iZSmKwfZxy",
  "key13": "4aQxf97AYW4FhMxcVDgjXbGVMXLAcr6Swr32iWx8wYhZE2DADA56JL6BgSzNYT3USMqMoaZyLS4QDa6EoxJi2na1",
  "key14": "3btXBxmpgKRYKFjD9e5xVy2qGbX1mzWa17geP3n5vYV9YPrbkykKXJmo9HgeghaJumq4hPKEgphLRBTbAj4ZjVHo",
  "key15": "JLwZMd34swFcTbZQQytpbmiADUzC7w7s7KF157YBgFtaEjJ88NYAf4WwcugatqTn3uMWH1EzHvJ7KwP28noPZ5D",
  "key16": "3fQ7TPry3xddKREN5LdubgVEEghKV9RAk2frvqzeDmiHvv6ufvK11Dx4HnL2bGFrYVcNSjhf7i37QdWsr3nPvLGJ",
  "key17": "WqUm6RZK9kkaFk7SjdGEUhUvf9czkR12D56jam85gBKTANmFJ8TxFQ7XvTxu4mJsgZYM9ANvcvBKiYeqvrAd83b",
  "key18": "5yjcB99RvCjvPtbJvcjgv3XYAegzy8K4NVj5xrkLJY1j1cPffKmzFLi9txie2cpPiKBFjnVHLaS5xY12E4DejiE1",
  "key19": "336ipvuSbwueR41wpZzy7psJLTCkn7tNMYetHibQcXZ1W4a89ugfww1sEK1JA92kG7a32DdETM4NaWgyiRVviRCH",
  "key20": "5vZMzzJbwVeKRxKZ5T87yDRzkMQ1gYyhKBjEC3Fy6TTRQeuRxcRup5Ld44P3rG37G86skCSn4knwM66EGgxi7S1W",
  "key21": "29yGEBGs5QFJJJSiWnNRhaxtQXCYQbBNwV7i43uT7XFyoy8YraYaDGAqyQdYCpcMcCeAoNX2arMzxykhcXRU9Eeo",
  "key22": "2xojQgnkdjerSxVmfS3jjJAEoDCcX4fmUZs9svmhmx1rNxfJQisGzemrjHPBBV3nRBNmBCnZstPq6zZ3RUF1d319",
  "key23": "3TfvVgJkVbdPBfsWZfpV8kBdhXiuLJPnMWz6nGMUrnjwCXpRje7ZQXCNvq2koMAfEqqu9hFc7oomLGuqGmK3fBRG",
  "key24": "2VMeka8SHYTRAQsSWF7Hrg4fXdokND1YV4bWsrrSwauqahBuvrBZCUaBybEKvUjoZ1rZhpmvdUpHhHS7E61Ead5i",
  "key25": "2BP31PbaNe7kn7mWzgvLAeZcKeWrmBH4rkrpBGroXPYMMEMQ369rUN875u3cFhPhTDNhEut9eQKj1wMXfW8upya2",
  "key26": "3Zc2YR72w5THj4ChQNCN6Qn82vSYJShnRDY7Fy3fJyrhDqAfnASz49YUoPSQoFtTUbfCX9etmstjz3HptNehZgsq",
  "key27": "5kRthxGAyimSQ7NsVASTcb3v1KQTEVrgwwm6fTDUweqbUXq32nFNcMB4xDPjSvt6o9LWuWipNjw9wKe66MCSRsB3",
  "key28": "mL6z4FZNhRaS4b3Dyr5Rmrd5pU4xAcP54WUKbVn7Pm4m75RyxrWBVQueGNLwgRUP3NZw3azyLSmhwnEknsnowyA",
  "key29": "2SH5yr9N9V1R3FG5FJU5GTjkhK8DEVRG5sidURbbHFsgRs7cK4Mmakdzyx44aRcdA8zVhhuqZUGG2R2wxtv5kb7J",
  "key30": "4fjdSbyNNineieHb1oVKP2F53BVQ4szz1EFFbvNtJ3qoiC1dv34cAMS9jbk4Z9qk2j9MLsWHujudZyHSeSy7qc5V"
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
