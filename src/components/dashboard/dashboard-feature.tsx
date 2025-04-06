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
    "3vXwu1WtMNWTHV5ZRc3gqBc5o46tTQKDBDKKThzPsExCU65JBacNMxeseegTMAdBN35AsVNWaSoztjZR77LLGXGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dZtzFfv6sLb3yj6osXa35DXd2NNc1Rf2ZGDXjFE2XSrVnA5LzS8gUtQvfG5MujK4MbQ8SpYigPHo8pYZPkdnoaS",
  "key1": "DHubbEHBnhZ7KVwgtY76ykP86EiTawXBb7rhkakrWtw7tvCSYVoaBYuf72FjLwHzfnB7f3RytwfqUtGpSYxPC1o",
  "key2": "5nWPekk1X49HUdKeumCsEXzECawqbza5dzehz9kkoUX2qty4dum68pMxzDZPkuzNPAUjaPHc62GqXNRNwZTVrPAC",
  "key3": "3Pyu9WVTtFkAaAFPMNTZFEwML7d8gU7uYNBzqiwcoNQUJ6ap4nfqntG6EjdZnSw17gh9iXLhiNbZSNMCHTpJHQxa",
  "key4": "8AaafwoeLs2gWbZXUrXf7cfNZ2QDdyV5YAQ5tpkqb24QusD9FVxr7c8LkEAgWmwfWchSjX8qiWc56ahWVJkk2Ha",
  "key5": "4Ue5NRzHz9t3VHUtpEvhEixZ5JeUei3Gi2dH2FZggH8nYBYpNJVez46U8pb31xDXqR3Wsyi72DSE79Rf2XF9KbMH",
  "key6": "3Z29WLfH1h1RZb9p457QegzxR8sU5XhWDotSJdrt6ewT1K8ZmbCefkMTpReWR42uEFYUA5VA5cqxQdfnbvTD11c3",
  "key7": "225we6MGMEGHZLBXFCfWFDjMCrXjUsJhxSzJoqEebi5f3TstizZuQaYGkoVg2B1VYvjJAoGHpiXfG2kErwkofqjk",
  "key8": "3juFyTYm15qCjvUMnU2HxaipzPLC11x6K1BLPP5WfVYNSZSNzrRbcqpZxgHKZc5Chbcvhvuix6uFHn8EnDRra8W1",
  "key9": "mgWWvoAXfqqQFyfmP9T2kh1Jii6eKRG5wgFgnRkDAcSzeTihE11X1zuNdDHsrGHBSDph23JbQRiAq1iyGEud1RE",
  "key10": "4UBmfQde7vacmENsSrG3HeD7f1Yf47FXnG7V7wbBxk8NtMJfUKAhhWWDeJ2rGNXa7hwg3LxxYmWZyXqac81ypmJ",
  "key11": "4KJv272vWw8B3hNT1FMMN2j3JWRTZj5dWikyxyDtn5tccTwukaHp7emvewv7WdbZYrrHe6v58xryP3G4NsdG4npj",
  "key12": "fwR9Aq2PyCdfV4k1H6puRFo2ySyBZEkNNGerGh3a3gk6eUzfrmpjbQ2UGvSkRV7hxS2sG2rThGTqPtjCAeFWNQn",
  "key13": "3RSgF9EUkBvvFYhMuouyLK7fhtH8ZxREVXZokCE6Tt22xeKaJGKZTuALCEPiEbERtH8JT6TmouF3fgGNHsMSodx8",
  "key14": "2bQjQf24iNRHahLH7WYR5izdDhMTHvrH3wiss18ZcLG3DTjcSyL7rASpooKSZcQuL774Fts6EwVWw17h4xZu9whr",
  "key15": "2pgWUicQrVcz1vPReVAtFcNHHasiUkUjNWFrZcrywcMaaJUGesqJVtE8Ce49GpcdqxaaymdDzCTKDS9M238RLNK7",
  "key16": "5ddGSjEbnVQDPfyiGFQBxuLsGLp2sbBo9PtdbnBxGQTEtNrbiMErKVv7DnNLYrfeN2spvzK9ax3uExy2HoRnQ5m7",
  "key17": "5JSNttdMa4roRvmWzQ53Jz4bz593vjh7xa5rXV6yA4uzsWPZKD6SgWy4M5xSP7RPhgyzcuvDZeKCekU64Cf1Y67c",
  "key18": "3RWKgtmnbqr7VvNESNRBdVeehSz4Yhit2zKSPEBLgjaunSBANYGWxJnjp51PnZ1hpGUpTMuSVMRTJWGaJcBzSdNu",
  "key19": "3PpjDezGxCdWsSxXBBBWooHryYP3sM8qkNUCzhjFwvYdbLAkW5TuBhNfCA154P3Gk34VBtTahHWzyeE5SHwygmaQ",
  "key20": "33ztdPSNX8qnibva2CtzTUNDXezUAcNfePHsGq5ptKALufipgD2ajo1mNv7kqCVSrEAmLwiD5CSD8kQtrcD3yv6y",
  "key21": "5JcQMThQHhLby3NhUMCByoHfMzST5m6uNFmLcSs5UkeLkqMBn9XCDqz9msk5gEMpS5hg463C7YYsJ3cRo4GyXcWu",
  "key22": "5hCtNzQo2SJqcAakBXgvAZLBki9QDziWuUgarn9T9bDrreigTMMHj7drhGKkkBiyYFgKPX4dQQ1Kc6R49Au4yAwT",
  "key23": "4mniL4XxcJkw2Rr4HNkQ5SSCpJ1u9aoaHsQG3Dmkb5XwShjKr5iLJDS9RyLHZFZF7agAc72m7WW2k1TkrvKcEJbS",
  "key24": "4iLvkt7EEpCp1f5JYMJjqBKXs3ahB31YyhDwqS7FmXo5FdY7QHEuNiuQskjobRWrkbaawPSDfNejgVLAFLKM3UFm",
  "key25": "2sELwpVcWCmEZh2EKu9oGyUJaho2Cwvg5xNAhUX5pkCi5j1v25MQcUWY47pfxAtVLUf6hf8TVH3CZ8noxpmwEFhz",
  "key26": "4uhnGzMkRPUdoSV2m93oSPVG3N8QaciikNnwVxpNeQm1a1yGsbRdcRJ94uG1oJN96FTFCihC165dGvSo5wgMRfZ",
  "key27": "5xrEMQhDRk6dYjzECTjBw8nAeoBigKRgPqscPoKanMThv6JQ3TNqzTXwTmtGrA4f5ahfFp9jVsKU5Ydx1WAR38te"
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
