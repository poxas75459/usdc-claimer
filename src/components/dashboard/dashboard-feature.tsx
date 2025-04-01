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
    "2ei9VQjcRTN7v2be5uK2354zsmYfYBWS6kbk8NHezZi4U5r6R5DGEKLNDzYJu8PEhiGJdSoRtgfLFdEGoFrdj5DK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uDmXQ5xUQFZjBkxa1R5cB6NvfNdB5SWPomFKdfo932Cca5fFyZpxpvWvcCUjdmStedv9s8iBniSwmkayjPFDC72",
  "key1": "AmDBaTLHXsPk5qQy2DtnvpL2vkopY8tyWmaTyHpAXNCAmiVyvJ2Y5jZqiL12skWrradcb7qP9e2BRVhHwx3mBqr",
  "key2": "4G3sqzNYTtzyVY8ZHuygjXW5PnNHXSrRq97ar5HCzavhPaUCfDYMxLWDEkzeEqh2fKSM1ho2mfPGawGBr4Xj86i1",
  "key3": "4FnN72885oqVatgLuqFGzGp6aTkqRaHSa7CiTCB1oKuR6Mu5dfk6bye6hB8gmaqs6qcny49pUe49ghEnKzehyWxQ",
  "key4": "67DPSKYgHvu2ZB14TiCuXoNzuNKouoUggjgHohqK7zk32NUYheVGKKc4aVF3kSVoq4hQzps3x53AcFpe9VHGx9HY",
  "key5": "2ftt2GRxoatc2saetPZVh4G3SUaXt6j4wRVNjA8YbUDP8tdEbW69MgdKoGk1SnjiKs9yht8V7np8aT19b4pSWRcC",
  "key6": "1JmjngkJogh1pi8eNMjazrunM5vKFx6BaKX99D3JhYA6oQQPizjrQzRBsfqHSoCvRp3SR3zMXKMwVGVAuYkN8bR",
  "key7": "3eA7DTYmAwjanWoAoZY97woh5XVgWK5rSRADQu3H5nvFSaT6nVVWggmu5KSqB4FsBnmnNeJ6AGoN8SXoegXgWD6v",
  "key8": "53cfb6pLfoHraKZrVmXUECLopfCMZw75DmP391FXdNeBHxcqYE2czN6385WBz4RcsSz3nMZiZhcK4YmbJwwvxci1",
  "key9": "4QmqozRiHA9ybHBJ2tBxYb4G7aNXXAZHDKhbxZ9n6AqLX6M6H15qxipvzu2Sz9wrff8gC3bN9wpBw735tZgSaaPM",
  "key10": "26eyPUPaezva8292BJVwjDoXvcsKyRGNPj41ffVdjeso3H9HQQL1GrdBATbajxafPNeJFemnKnsdbEeaG21T1wny",
  "key11": "36sV9aY7kiXmuohS9VRGLjPnHa2dHkJUwqtt5HfpLBXm7g8W4AMong9C9vpNFMC5LwyVkRVX5AWPpezehRwR465q",
  "key12": "4qQthSaWvrvMDfcLncWhr2TP7KjoVpUjKVzhEbv39gpdoqiQirrnVrpem4NoaXEEc1rSkVVmSkdFSUhsGCBZFsuu",
  "key13": "2mU22pDBoJC3zaK9matwUHdSqFxL5Fi6zCPELsHjF7tZA8tQa74ghjLYnHZGyrcMLn6S5tuxPiHtPadBTPFk7zZY",
  "key14": "3hDLUESqG4yzkKriyhMRG3gwHfJwriFhuU2vbY11wDTdGyBbhZVifHiJkCoTYhACCy8oPUNyTXkH82QviKJTNapa",
  "key15": "zXzc1obpHfQmZmWg9gjZyG2EpUjRGfg2y6eau2myb3szvLkq5ZETCha9LFsvRM8nAQ3ixQbu6mQJwyebTNgEgdJ",
  "key16": "2Jn28QNi2xbFjtuXvsVpYg9qyvY75bEZwEGeAPDwys1FNhb1FVfsDvip3WSf58qq3E38DJUz63stVfwNy4MxJ7vY",
  "key17": "36FZ8eoW5huvFTyQVBkNzDeun4PCWBAis4wXzRs3Pcxsw7T83qUyRsyh6PaiKTRDR3rVsx5Kf1wHbmZRjE6AEJSm",
  "key18": "5SkYfPCCK9RDdrxuZv5JCesSGpQ57LwsDRSfSu7tBLeaSEF6qrD2tggMzVQA8Z4vmfvExFXAzarjcZq68hihxXpo",
  "key19": "4wu2GceTJEuH5CiToR2vCBCvnB5dg6ZL6LD8yhusiFkoZjXExyCykCtfUWASYqNbRQxwQe9ncaAjTfiztG9FQ6Cw",
  "key20": "2ziNmsYnCSK6ta3QhuuVH44t5oxnNVrURPR2BRZSEa1v87Y62KhrxPNJb13zxbFieUgY3CDHazkVQW9To53yx5oB",
  "key21": "2PXEKAGDckKmVwcWkFShD3MvwUPdcKK5Hk5VS6WBWvawYjAahwq4EHgZ5i431GoaJnBv9GfVA2Ko1VXKA6rXvmu5",
  "key22": "2ite1YRQ5ULb1sSNFdUiHyaJTrJr9B3E5hcDAj1cxAiKFQPsDapS1bmFygWeKYpbadoCnTRdfcmZ9Ey43AGdUrPf",
  "key23": "2UTDgS375xsM8xgSH1HKKmns9hqGFu3Lxi9ctDSwJ9vkDCCcoaZqQCn9QZZsVsWzQ1fRa7fg2f2bG9BQPzRCPEh2",
  "key24": "r6Lyyqw8UMZYpFc26x1RovLfZnpNn2NC93zg3VCZ5DqBJy1wAGmKe7t43AkGB3UyaktH9riHTq58NuQQfoTca8y",
  "key25": "3PygwjnS9fwJrKfqQQZW4ySYguiKrrB3WYUYRSHya5ZeCP9FUf1PUUY98JrzGPgw8JU1t8iwJpF9zt2Ak9avKY4n",
  "key26": "3qFxEB5i2wU5C6RoXfyy9C3To8MV7Pqxs9oGvNp49PSfKWSdaHtVJBhCQbZDTXoEFKr4kxtZ1sL1izZb6qV2qvpT",
  "key27": "4etnA8cQL3MW9dHh9ZswbwqWhHzvQcoKyWW29jXmTYmv1osYcoHUsbdEgapv4igza46zBqHU1rx4uE9W6YdzZgj8",
  "key28": "9pF8cVEqwsahLsQuz1BF7VbEuy62XBrKEskNr6C3yC6FNKgu82BcECrgQkb88du5UrJgDse93XQyqZLGwcQ5NEe",
  "key29": "33WtkPkDVz8RuVUSvGZkdmpGnexj4xwrceme3zVaDao4RwrVAdkYAoKcBJHpFZzJVo9RFp9SQiy87BjfDLW6GhYt",
  "key30": "4izzPUjHJFX3tDDTpJuzaLZMtUpq5yCvqkRopfKbrG3cJDapDLYsaZa3bJDLrwkC3zzdHLAb4LHsFDfUXeRhifP",
  "key31": "yCXNizPjYXrsFrv6K41AsHUD2WZjPYhbjJ86sqvQ8Vwn6KyvkDYXtUJwAmiEXKxYbWAGy6MDLmnLdSvQdg9VVao",
  "key32": "2Lng7UfxPYcmJKpeypQCGErbUdhUpobJBXTrRYqm4tsTN14HYevbft47FoL7UmWJR1nbdJCCMXDbXKaxEHyc188U",
  "key33": "27EuX19AvFuY3GW3mo3xyvJmY4Si8DBFL6j8YcXKr81UrHYBEgiwg6mjacFsaCbAn7vd3ZwBCeL4hR4qkhNLSefY",
  "key34": "2pJVeyqLozrd5o8SmKSC96S9Yn3xymqCiuKNapiXhP1M3DZximqknmfR1Rpia3u7TVdzggr7EK4PaLUwS8K1XGFn"
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
