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
    "41hqCqzdkim33NJEpv3ynADbLEPBfX7CF3KsXUk4xghjzrHNyAq6AZUPaNGQDQx4jfhQfWkhHyjiCA3gs2ArB3zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dWRjWbhSVr7ECMQbJ6oR8GzgZeQTcA8WDQKKzHy2puusQ9tF3ADd8qcaoryEGWrYBRUypZYihoyCNtPX6qAu4mM",
  "key1": "6ZCBEFoPoPtys5AAkKz3aTMwGafG7UTDFKK7Yrfh1yRP9ZQ3H2itumZ8NSj2PL3BbcPHmMPevDwESkabKWzRmLm",
  "key2": "4BvKoa8xEv1sG4tmg8Ji5CDjKEfpCFQg1pdtD2PvAK9nDcDXuMn52rsDTXjwFcamJRzKZ2rMxs6U254kshCu84Vo",
  "key3": "322WH1GNrBEmeY5zioQfQJg5XnSXzHQydXPr3ALPPrxpCQhB3H9kT9qzKUNQeepbnG7apkSHCyBtF6Bbo9z2ekHN",
  "key4": "KPFYubpuXu2ee3dzUNTqed9msXwU778yKshvT48nUv2MgrFYnDfh35hLhF3hQga8N7PDXvpT5a6fdnAW9PqMKS4",
  "key5": "3XGcXngrwKFpgHTV5oXekR92KNm9j1cv8tX5FLRKJ34VFrUmyrk5gzHPNF4sCoL3J7QhGBiAqwvfkakccW13DrW3",
  "key6": "4yqNMc9KS2sGfHrjy7eRSgqKeq7Lm4kFUu7YZVZyzH5nKyeEpqDTWaGRXUBiHscfLRzXK173VdHtwfoowg6oan2",
  "key7": "4MuzySFVLxKuto37GaMu6y1w9j9rJqkjxC9pENtmzvZZkjPNfEiBi1eUwvWy1bhpaZTDbSitHyh79XydYiyFbWYf",
  "key8": "61mEyvcjxpgofKPPqBU3LgumGcwKokYsgBV39YUNZbJzsjS6kko5vkb4hyw5cWomH6srrRLUkb3w3FzPkQrWHak9",
  "key9": "5APoPWdF8RcW4qLXm2VNep73wcjjMgcCD7ruMdULvj58evBmz4LLpTYEeZXPbvsTbqE3JZbmMwXb1Lmx38mUaZxx",
  "key10": "5u2Tpzet8fajqH2XHrb8rbnDXPbcMwagPMwaTVyFpax85HsXnRWyp2fJX9Hi1oDovD8nRLTPfj2yhjRqhKqX9fKZ",
  "key11": "yHRK829C7dzWQXa7kjTDAAhh533V4ePK5xCcUcCd1sVQwPyGeuwVoZppyCBGv3LtLf2PTTYLPbuXTm14q3wZVEw",
  "key12": "5TJU581DH4j2icvHEyMvR9hqndwuFonVphgdQErbDtPvdRgcGfBEbtTGkyYnqwqLuYB2W1iviFPeyk7uxzqkfSRD",
  "key13": "4WH24bwZoX5Phyv78vSjR3M2WFzdq2ZDdZixAjUB4FhWvYtyVcBoRWCstSUJPBt6v9RQiyppoFQFpGZKhnPESWJj",
  "key14": "5MLNQpLBVfHniZMkZi24n4FzvQL2VyKSBttiqoCTPimwziZWtsCxH8LNFcLENzWZyUyKhCEUmdxxLFfASLMwx6qs",
  "key15": "SpyNac1MLvoFc4kZ9opHkH4zFPxMLA6nxmwePYiejy7a6R8nbZjnDtUPVGddczxF2xXZ9nax4BZDScToMupLryj",
  "key16": "5Z2AQJ4NxUAb4EDXAPBfd3nM8hNeQ74N6s8HbsFo57dSkn381ijwDB2ZspSHviJx8xyq5Z2kjHsR3jcFneVjgDoM",
  "key17": "5wmHtQWRokMGusxktd5JFPU2gW8SLkZTDuLrGmr1mH7wpep8h6d1NFERbK77YZcLSVXjtoXk3qmSCnrNZ9ECM8Ln",
  "key18": "sgc5u7yW5N7WpMMybnyjvHwfHewzZFPeUZK771zZoAx5sPawe4sG9u643Q7H7XNagnbKSHmshGa77br6jtm5ZYx",
  "key19": "zuccUUCEjWWik7zKq59SS9qDJDFb5cKrbjoB77fbYKLPXdFzfYL3DkuFx9bL3mR8ayXmoEeBrCT2gUzBcWL7zTa",
  "key20": "3jDs9vxDMEfTRB5d6XfXB9nrPagB1h8yuxixRSzSnC7srSZisJHnCyYBQuViSqN3sm1yT1PApZhRx4sEJsCw9T6r",
  "key21": "dtGdFJW2fPVpgw62dvF51VhSVxRjxeTsL5ikpbeo3FKTRvBmTU3UPF9e6DASaXRH1VvaiZCUKZm4vJtzQigENq5",
  "key22": "7MQ8U7oCs9bBTW6kq2Eifs2QGSSLjWa65zSMpp5KyEa4J693wkoMXDYL9Cio6XAcU3ezdNYMWHw6d2zz42jQobG",
  "key23": "4Xn3BGG7rxgmn6upLC3K6vTB24Zj32UUXissNaoCjipJiU6w22FDNftc4oLojSmwF8jawADAAKe1kg7iDt8cRMhv",
  "key24": "2oTt8zxU1jZBj7DLTBZF9X8Hh92UqCapE68ZjXC7fxCQQ3C2QYjrhFWeqqgnda42RxrUZvUvGCmhYTC48wjJKuRP",
  "key25": "3SW2uhbDd7sXNWzTCTxKJK8kPDAf9uAcpBLFQxKhkTAxN1Sf7qq1jsxRcKzazDhT5TXcu8E2pK3hz5TJ4DwVVSPV",
  "key26": "4SA7xAcXwAfcBetAoKEpTgmgHBkG33dRsM84gKHTSADYtZguHqF8F9GwpsRstoAFmWoTmH38wU3CrtrFu2ECMk65",
  "key27": "4vYbSyhGbibSDetqxhB4nd8GD3qAkzSyCJdNyptYg9hdnCyHQZWZiLjfiQBQrKwgpaweSCPz8eqAB5PPkwEsWYAF",
  "key28": "5mSoerYawy9Ly4G5VEhPRScrLzEuHMUUSyNJspvzGubrbY8B9JS47ZGfRYVzGQZqN7znMWrEdY5zegvYkn8bTXDs",
  "key29": "2d9bDKunv6shnmG1YtPSf5rzKuX8oxF4meT4tYuSdDKwAoJksvG3Ut8tqrNJXbdpZ2Z3XnVx3Fciq45H1PeNPKYU",
  "key30": "2Z3LPhH2GNjz8pQNh8Z3zmsGp2yckc513EV2kfgbpXsKntoFmGUf5X65VkyKfakurj4yBg433PeewmwJyHaWbYAN",
  "key31": "5d55Fdf7Kg8Wjp6bqoHCUYGszH7L9uZuwWYncw8hGuwbBq7SCkMk5MCBK2mEV89yW3Che3iwrLHWo4F1unaFrjbM",
  "key32": "24hwuwQUXijq6opdcs3jk1oqLhkUSXu4mckguJwHWZ1QdV1ptrem3m8r7QEt4MPBkT22fMoeaekdxcS248weXXhx",
  "key33": "2a3m5SbdKuqxcr4MNU1oVfxa9sQZpnj5fDhUhu4SiySQGRV2zrPLs9kBKVhGEJMj6twU42PV6ePFzUhXLgtTimPe",
  "key34": "4PCFq6Km8higwkaoPXUqBDbG5gkNVVoiCKz8KGY9NsiKUJrdp1Ewk6Sf83ixk89KPnCREp3zDUAhCETJxyZP7tZt",
  "key35": "43LLDxyyMbKJhQxzJhEH2snqcYtH519w2ToYnw3puUcPJyAKFP1BDcyrz4t9aD9kfriTeVjLvtQ6U4Mdtqq8rhYp",
  "key36": "UxGcBbchrQsg6d8a7KUhCGEPeJErLAmc7MeU8rx5j8VYYSUG6uXhBqjJa22x2NtqtGx1bAbrTxhe1qpBeJ9Psuy",
  "key37": "3gSGtoiGYNNpfUEftPnYCBpoABYqoPbMtJs8gfgAnyyAphpcXnxES37yYUo9Va18KfLU8wBbrZacxSHcUPjpuUiY",
  "key38": "3mdVr951RNuU7BVBCkED6mLMKKisjVYVMi4RrPwszw1otxyJ48VQ44BrFtARXvchv4FDVwGHp1sQzWyPxQ8QmuNc"
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
