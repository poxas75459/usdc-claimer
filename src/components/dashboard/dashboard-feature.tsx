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
    "3fs18EZSbcgY9hATKWNtzdZLpviB7wLP95SWyJ5e3afhRPsD2oJcbTqxEGXhtFbMb9P4eYtziJ9hC7y1TXtBzxUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56y3nwx1xf12tLLbBhsNotAAHw3sKJu11WWMbLR2NMnrxTULd5kdK126QjyhZSWfotd2QzgzAnF2v2oMGuu7mXDq",
  "key1": "4T1nmdjTGyhDwBfZ7khbRwCYe554cbEP3tk7u16pfsD1r81c3QmMvgPmj1BGhyGP6yM71s1DjoNZp5vSJvtomd3w",
  "key2": "5byFfMZ4x9pFUe2P82iaN5SUBMuiHiazpwAFWH18oDky4fv7pPBmgefZXBnsZUd9jQQguVTaH5Ge4pH2cJ2wvopQ",
  "key3": "4RXnzcfu9BozPp8XaRyenXMqV3nuJ3UG9Xu2Ffoo6m4qyLARNE5Yh9mKCn4L2qkvwgzq8EzB2ZShHSpDfScLtWPh",
  "key4": "4u5tCx16KbLam36fdRrZWyF3mzSpnKZ1bA7q9nbCpcZe5nAUP4JuZqMrG2vLjSXGnZFveD74QeQaBzm1zXX72RJG",
  "key5": "3UYyi37xbvEpfdkMA2At7VYB2ceuon1DBonVD9xVaXW4Gikhz5ttqu2wUq6nWoeuAkuKTpDpAULpUawq8KwtmV5f",
  "key6": "4PR1uLrrry52mh1aXUrASACVfCfCE2dY1tk5Ppqkf1CHmc8BRgrQQBFveNzZBtWVW9Zj6heCrbMcjC53idjUdX71",
  "key7": "5yVh8qocooE1bTgY1MQVcKPcGaw9SyFpB1e4F5mcBsrXzHHsLZhQMmGnXGnLHDV3R4YuAjYy3zJJSFzvu3f6npsq",
  "key8": "4wy6hhtc37U25QX7dPrXrcvt9Sg7khEVNvZi643XaAsbsPnpE7Ad7mfoRmoGipkoTbnbc5H74x29ve67Fqc54YbB",
  "key9": "4J7TYSnogCaW3kQ2TxG4B5adTLqHKNeNjtdKyShaE1cDMbwDt1dr3SeGHtavsKzjfVYXiSEHZKbj37FYiz7PYpC",
  "key10": "4jDH3M8bCkb8qCkbFp82B2uJcUR75WVMtoEk2NTtWD281SCJbmcJV3G88LWDodpM8b2ryZY7nLATqqhhmbp82bsL",
  "key11": "65J8kQrbZj4DrhpryimapL8yvn6NBM3ggt1TmP64bgBSdcHX41vCQks8rcbS4psczeWByc3UXqYgNiaHLq5yXsdb",
  "key12": "2pAYaNKGrwKs5QQMZCwMTjkmVED45s1orDkqq8ZUmUudaPmbEAGbQX6WRc1rEqRctpF4BasBizT3XHyL12jwXt5y",
  "key13": "58yf6NMBYsuFQCZbUDxEVfMPQy9VPoD3RaRQtEz7mMj5DUFFTzQTzGPhqj95i6qcMT6xv1UWLuUwSC7kSazUgBju",
  "key14": "5PVU9QtseTBWy9hS4n4Y3LuSyCuv3PLYTL8GdP3MFvfxJHGCeGVBZTBTAfH8R5PmLyf2HmabEsmocCzFEUFQ1t5o",
  "key15": "3ojMh9P2PwvF43VhShsB4rnPdwsWxC6nC99VSqe6z9jfHnhNphdYtygkkSw5eus9mbP2eNJu3VpAL5dwyzgbZ29k",
  "key16": "2QVxYXpP14SFKCG6xKLVCCQc5JqNq4ZJP6QgaHgW1hzJ9wNVpkP8VWkY3vjFvb1LRNmbsktUEqyqR9Wx8FMivTu4",
  "key17": "5EZUW8vN8NcRxxipTjPAToM9NZ4a9yXbd431KRHDASoTU8dyDJM6TMXYV5JWWFR96zRRQhRvcURMDw9WsCeLtnbU",
  "key18": "2RT5Zuyv6W6GkXNpcwzTEnYBTWoFPBkcNPGJv5RfKXq3KPuh3grfSaC6MLRpjCywVWnBhAETaczFjwPqCSGn4Xm",
  "key19": "66HJhpZCYJhBuWSRBa27ZyssCDCHxiXx8EvkCwK4sdp4EU4waPpo56hNUz36W7iqNGLpF5EWy6MqLvYs5tbRKaCZ",
  "key20": "2eUsiFtPzzhrg8ASEumKjkfQiFiaJaQimTMy4QZBchh2gmk53cpCCCyHh6aQ83PiYGjEjP9NcwdDTWGtvpngtkYx",
  "key21": "2ACCU3UtXoZwteRPYN2crHFHWePVWywLdoXYWSTqm5UtJpfHH9qFDT1Zv4ThfCR6sfHyZWWwKQkMZw3nq6ZhqBoN",
  "key22": "L8cJe2hZf4aGcQb3Wn53oo2iWVqQf5oDRGrW3ZCFeMS5ZF89KfaHNVt5xTNQZRarVVu1XXMnPbuRr32EwkWtzFf",
  "key23": "5F7P3FcM9bok8nqWYaoGqoqndNGLSRLD73JA568cmfdvaFaAP74ja9E5PiWNkTyzFDEvUFhYRCRMGxBDDQVmfrNA",
  "key24": "3kJbh8tjKwj3StSsiRDSTD5xDKcQ5iev2NSozxHXCDrixuJ9j8kU5FgkivW8chQr1YTWSy1KAJU21GqvTbmaVm8a",
  "key25": "3AfGEPrw4MdYgNAWg68gA78aSoHnUeBmscK2HnsQwB8mhvgt85zVYMzN1SjgvZujjBcV3gcKscz65Y4tyD9q2pEK",
  "key26": "23ZrPLWJmuiDCsNEQyCa53FekeuFMAC1RKKcb173i2DXe4eXYTCGcoCotRw5sfo4j6r8iExz2K2nSFun7dZ6wRZ7"
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
