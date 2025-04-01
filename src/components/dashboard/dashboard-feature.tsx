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
    "2SCR722eKsBzL3yPGutnaSM1Xy1tpPp8pAJoSGgSbsARZXccobfcKTiLvpctwjsTYg9YnA3iMVEE3DssytKeovQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26DoG9cdswrfezSqB1fMd4Vk7MYsjcBgwSTdy9xQQ6yMYpBJqi4kq9GVRKL7yarVzAbhsYf8hNpFndJergjWfCTj",
  "key1": "4rrKcAAXYQ4XVMfQQWrYLXvDS7AVivFhjyPBSYoHvGjaHSpJ8icYgSuSwhYupbZkxgegrcCTXdsaSogSUJxPEYur",
  "key2": "3yhDZL4F34ePs7kNiJtzX28pKSwMEYHvEsVRDBX3uABwz5j9WNHbzCdLPGigTtxBYzrKkJGhytgdiuDqNKg7Cske",
  "key3": "3x9oSTwwuTUvR7DNPFHqd22RsMPDZ79AZaJXSCETJg7dSayxUCozToJv7HxPSKNgGU6ezjR9PmioUcbrwS1E1qXG",
  "key4": "3rDxb7SsCALccyaJnWpwA5E9JmCoXrmWXw1vr8dYHXmRozhKYN6gmeHwRhBhRMU47yKbtPQgyvE1ewxChYcfFHhM",
  "key5": "aneC19CYaMjYRGTppmVkEqUbSZTY5asJxz8fMCSwstGQRnPpZ7u1re4simJ8ymhNYFoChZmQiNjYHLZfSEhRdhS",
  "key6": "3kqgqPeJ9YRkRc83XLBLmivX9SdXNkgZ3bW2gijXhhvCzNHz6kQXbravizxuv8uaCX6rZGhQ74w3j59AASPXjGtk",
  "key7": "23KU1a7D62KxQrQGanyh7GUwL5XN9PoPVmgv27GjTv2c1cTPHjfJCBy2JvQzQzt63KFmLqikTfEbiCxZN4A413Ri",
  "key8": "5ueHC34DF55X8C6TtgyYgXLLYQB1bNswDDrtRSUZAyig7sfdPt49sYodbZPZMQwdU6i7T6oX1pwGrbg51iJJs1ib",
  "key9": "5sUrWjg79xgwEJrxzXetFXLksvxum7mjyso1zocZgppnvE2Km25myT4ujoewubrDPH6u6n1bVKoNNjRmkfUtiH3e",
  "key10": "5Yo5EAfVdtM28s8VmYtAyhnCgsZZ1YZ5RVPGwYCfZM4nDg8P476a2PdbwWaoHVwz1jGxR8oGmwbhxX3vzwMpG2Q4",
  "key11": "26sR49Ew82Dmhz8Ao3QuP29e4pMhHhdg9ogEJXE42Z4hb2UXqH4ajCDXTZqQ2DR4Ros7Cxw9W94nk6MigtSrGkoF",
  "key12": "3ycq2cNzUs4FD84vh8Smkkvp9ELTJDP41EXV8SPZkEs7dJE1dofpiHQ2SxH8ThUfMiDFKV3qTmD3jJ9LbUK5g6wv",
  "key13": "jch9pxJuAoxULqb4X1gRuSBxTc5zxivGxDnitFJMkzMbLuVSkv8aP1dSYdAvk8ufzyLCMANmZvW4MqKovC32g6K",
  "key14": "4fjh6yfxWfGwR5hzUTTjyM4sB7b7vesosXD68CyAQCapDi8brF5w4TWSpcThcHCrXjXDVcDwaUG3Hkv88Js7Y3bj",
  "key15": "5UZ5W3ijSvG6bdYYnxrW3TeQvZtYtBm8i4hpmyXH5K1LhKS6jLpWAFzV9yvRRFCsw347FQKpcViTgvgR4E919hEq",
  "key16": "5gjEx9bvkNHKEc29V2rPHxcDvUY8EkfwpiQ6CkrquabUpmcJgSxR18DzBEtHU7wCqDd6pEh3XzxwXn9FHzdwLxpZ",
  "key17": "3vCV5zMWCVhfEv5vfRXiynFF83LAC9vKXQMnHaJFT9YH5ThU3hK7oVxahzkeqh4eErXYujwjLdpK78eMzoBhUHzW",
  "key18": "MyRqnrH95fwKK81nTMDC3EkMRqhadh63txWBmFXzfxp45tYRaYwhck6gRwg4zyzJNhMJRgUkQVBhbxxBZHHsPJm",
  "key19": "5HtPmwgBDDQQUD5mYgowB7vMY3YWw9scCSGuyDZUhE27FH8wVgMQsvGWWXppGUkXYkr37bscdwoC36SEujxMabTh",
  "key20": "2XcqBtc1dxzEgDg6X9sYG4Wmf9Qs5dKHXPzLqo5DmDycy4WbHtMnhWgJ4yWiZa4B8uRNvBn3yauyMQFzkuQz1Cvk",
  "key21": "4NRtTBPMjJf9GZYcbstbVBNxMMqF4gn9ZwB7Hyd1aBUp95KJZTCtBoDU4s49QpdizqCLaePYwYZU2Egnr2ikpY2Q",
  "key22": "4dhErVNnd2WcrV7CjjW6w5JKQPNF87k5YjMjMv2WwAJCzzfqdrh4z8KZNC7CxoNnQpHVW4XDDgymBTEShxspvCsu",
  "key23": "5x9JWL38Z8P9sMvw47hHzTChsN9A91BeoeDbNyB9CLzGBsVfnhX5y6eV16c8pqhTiv7bN7QHbymjritZ8q7Wh5AR",
  "key24": "53jCDiAwUTSXP2gS9tMRyx7qY6xw6UCLsXsFuVU1rPZ7cEhDQL8BzsUYrhBMMHexMcDbWjte1yjrEvQUNtApKsGg",
  "key25": "3afUQYmxbDLKc1Ff639Y3DXedTtony8EZxSsFEKWn4GUTm4vqjoZrDkQkk38P97iAm9ibga27MqZVpTv1voKFsRA",
  "key26": "62Ve4HmxXqghBdjXhkmKvepKk9tpypNWGaehPR4xGG5JmThsdrbkBQ7xG9zhyzV9VxdR6rL9waALAwuQU5AfooxZ",
  "key27": "5ByN3Assx87xZctJ65hWQBTb1rFCTjmdbdAKTkD9z5bbunvNejfiWc5e9tkrnS4iJxwdxxo6tf5TQJff5s5Ua9v2",
  "key28": "N7FeXWcrvqn2ss7Hnu1r8Fug5VGcE66N4RmB8QFu6rRpLoRs7NdheQRKmDPk92pSVEfzzsUMzJ6adVMQjoRcS9m",
  "key29": "36cu2dFAi8HLfh2fJ2RWtAem3ePStz2Dge7y8U9qs1MGuH4hKXgzUyQ5XzTCK13Jhvq7PTz21gegqEoubL5FxnzJ",
  "key30": "2EgdWFZm2qZfM1UEbe5QStE4vYAfpCPZ5WMZubbwD2ohkG1hr7RkX1Crn5SfcwwueCVP3cRSBF24BhBXcncqwqk8",
  "key31": "3ZkbW68KSfTLzgk4xod9ZNydGJ85wfVHj8VatL2ZHntXjXyMjYfCoVkWBiKhrrXURjAYNrKkpHtsc4zbyVeV4gZy"
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
